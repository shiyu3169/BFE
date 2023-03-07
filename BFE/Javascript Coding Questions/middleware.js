/* Have you ever used Express Middleware before?

Middleware functions are functions with fixed interface that could be chained up like following two functions.

app.use('/user/:id', function (req, res, next) {
  next()
}, function (req, res, next) {
  next(new Error('sth wrong'))
})
You are asked to create simplified Middleware system:


type Request = object

type NextFunc =  (error?: any) => void

type MiddlewareFunc = 
  (req: Request, next: NextFunc) => void

type ErrorHandler = 
  (error: Error, req: Request, next: NextFunc) => void

class Middleware {
  use(func: MiddlewareFunc | ErrorHandler) {
    // do any async operations
    // call next() to trigger next function
  }
  start(req: Request) {
    // trigger all functions with a req object
  }
}
Now we can do something similar with Express

const middleware = new Middleware()

middleware.use((req, next) => {
   req.a = 1
   next()
})

middleware.use((req, next) => {
   req.b = 2
   next()
})


middleware.use((req, next) => {
   console.log(req)
})

middleware.start({})
// {a: 1, b: 2}
Notice that use() could also accept an ErrorHandler which has 3 arguments. The error handler is triggered if next() is called with an extra argument or uncaught error happens, like following.


const middleware = new Middleware()

// throw an error at first function
middleware.use((req, next) => {
   req.a = 1
   throw new Error('sth wrong') 
   // or `next(new Error('sth wrong'))`
})

// since error occurs, this is skipped
middleware.use((req, next) => {
   req.b = 2
})

// since error occurs, this is skipped
middleware.use((req, next) => {
   console.log(req)
})

// since error occurs, this is called
middleware.use((error, req, next) => {
   console.log(error)
   console.log(req)
})

middleware.start({})
// Error: sth wrong
// {a: 1} */

class Middleware {
  /**
   * @param {MiddlewareFunc} func
   */
  constructor() {
    // Create a function queue to help with execution
    this.funcs = []
    this.req = null
  }
  use(func) {
    // Push the function into Queue
    this.funcs.push(func)
  }

  /**
   * @param {Request} req
   */
  start(req) {
    this.req = req
    // Start the chain
    this.next()
  }

  next = (err) => {
    // take out the function to execute from the queue
    const toExecute = this.funcs.shift()
    // Catch execution error when a function throw an error
    try {
      // args length tells us if its a normal call or an error call
      if (toExecute.length === 2) {
        // there is no error, execute the function with current request and next()
        if (!err) {
          toExecute(this.req, this.next)
        }
        // There is an error, call next() immediately for error handling. This will now keep on dequeuing funs queue
        // till we get an error handler function with 3 args
        else {
          this.next(err)
        }
      }
      // There's an error and now we got a func with more than 2 args, i.e. an error handler
      else {
        toExecute(err, this.req, this.next)
      }
    } catch (e) {
      this.next(e)
    }
  }
}
