class Sort {
  static byQuery(a: string, b: string): number {
    let priority = { a: -1, b: -1 }

    if (a.includes('sm-')) priority.a = 0
    if (a.includes('md-')) priority.a = 1
    if (a.includes('lg-')) priority.a = 2
    if (a.includes('xl-')) priority.a = 3

    if (b.includes('sm-')) priority.b = 0
    if (b.includes('md-')) priority.b = 1
    if (b.includes('lg-')) priority.b = 2
    if (b.includes('xl-')) priority.b = 3

    return priority.a - priority.b
  }
}

export default Sort
