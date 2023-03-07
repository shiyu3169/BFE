function median(nums1, nums2) {
  if (nums1.length > nums2.length) {
    ;[nums1, nums2] = [nums2, nums1]
  }
  const total = nums1.length + nums2.length
  const half = Math.floor(total / 2)

  let l = 0
  let r = nums1.length - 1

  while (true) {
    const i = Math.floor((l + r) / 2) // nums1 index
    const j = half - i - 2 // num2 index
    const nums1Left = nums1[i] || -Infinity
    const nums1Right = nums1[i + 1] || Infinity

    const nums2Left = nums2[j] || -Infinity
    const nums2Right = nums2[j + 1] || Infinity

    if (nums1Left <= nums2Right && nums2Left <= nums1Right) {
      return total % 2
        ? Math.min(nums1Right, nums2Right)
        : (Math.max(nums1Left, nums2Left) + Math.min(nums1Right, nums2Right)) /
            2
    } else if (nums1Left > nums2Right) {
      r = i - 1
    } else {
      l = i + 1
    }
  }
}
