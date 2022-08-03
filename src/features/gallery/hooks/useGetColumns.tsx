import { useCallback, useEffect, useState } from 'react'

export function useGetColumns(element: HTMLElement | null): number {
  const [columns, setColumns] = useState(1)

  const handleRisize = useCallback(() => {
    if (element == null) return 0
    switch (true) {
      case element.clientWidth > 1200:
        return setColumns(4)

      case element.clientWidth > 900:
        return setColumns(3)

      case element.clientWidth > 600:
        return setColumns(2)

      default:
        return setColumns(1)
    }
  }, [element?.clientWidth, element])

  useEffect(() => {
    const elementObserver = new ResizeObserver(handleRisize)
    if (element != null) elementObserver.observe(element)

    return () => elementObserver.disconnect()
  }, [element])

  return columns
}
