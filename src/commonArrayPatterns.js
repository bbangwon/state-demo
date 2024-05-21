// 배열 업데이트를 위한 일반적인 패턴
const shoppingCart = [
    { id: 1, product: "HDMI Cable", price: 4 },
    { id: 2, product: "Monitor", price: 200 },
    { id: 3, product: "Keyboard", price: 50 },
    { id: 4, product: "Mouse", price: 30 },
    { id: 5, product: "Computer", price: 500 },
];

// 요소 추가
[...shoppingCart, { id: 6, product: "Headphones", price: 100 }];

// 요소 제거
shoppingCart.filter((item) => item.id !== 2);

// 요소 업데이트
shoppingCart.map((item) => {
    return {
        ...item,
        product: item.product.toLowerCase()
    };
});

// 요소 업데이트(특정 요소만)
shoppingCart.map((item) => {
    if (item.id === 1) {
        return {
            ...item,
            price: item.price + 10
        };
    }
    return item;
});