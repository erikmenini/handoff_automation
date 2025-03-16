export async function scrollToSelector(selector: string) {
    await driver.execute('mobile: scroll', { strategy: 'accessibility id', selector: selector, maxSwipes: 10 });
  }