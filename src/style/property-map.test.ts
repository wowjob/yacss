import { describe, expect, test } from 'bun:test'
import { propertyMap } from './property-map'

describe('propertyMap', () => {
  test('should have unique prod values in className', () => {
    const prodValues = Object.values(propertyMap).map(
      (entry) => entry.className.prod
    )

    const uniqueProdValues = new Set(prodValues)

    expect(prodValues.length).toBe(uniqueProdValues.size)
  })
})
