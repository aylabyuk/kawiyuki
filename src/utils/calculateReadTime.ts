/**
 * Calculate the read time for a set of text/content
 * @param content
 * @returns string
 */
export const calculateReadTime = (content: string): string => {
  const wordsPerMinute = 200 // avarage case.
  const textLength = content.split(' ').length

  let value = 0

  if (textLength > 0) {
    value = Math.ceil(textLength / wordsPerMinute)
  }

  return `~${value} min read`
}

export default calculateReadTime
