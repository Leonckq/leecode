export const order500 = (orderType, pay, stock) => {
  if (orderType === 1 && pay === true) {
    console.log('500元')
  } else {
    return 'nextSuccessor'
  }
}

export const order200 = (orderType, pay, stock) => {
  if (orderType === 2 && pay === true) {
    console.log('200元')
  } else {
    return 'nextSuccessor'
  }
}

export const orderNormal = (orderType, pay, stock) => {
  if (stock > 0) {
    console.log('普通购买')
  } else {
    console.log('手机库存不足')
  }
}