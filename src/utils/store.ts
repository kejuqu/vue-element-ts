import type { User } from '@/typings'

export const UserKey = 'UserKey'

class LocalStorageManager<T> {
  constructor(private uniqueKey?: string) {}

  setItem(key: string, value: T): void {
    localStorage.setItem(key, JSON.stringify(value))
  }

  getItem<T>(key: string): T | null {
    const item = localStorage.getItem(key)
    return item ? JSON.parse(item) : null
  }

  removeItem(key: string): void {
    localStorage.removeItem(key)
  }

  clear(): void {
    localStorage.clear()
  }

  set(value: T): void {
    if (!this.uniqueKey) {
      throw new TypeError('use set function must pass uniqueKey to constructor.')
    }

    this.setItem(this.uniqueKey, value)
  }
}

export const userStoreManager = new LocalStorageManager<User>(UserKey)
