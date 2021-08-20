/* memory cost */
const memory = document.getElementById("memory-cost");

function MemoryCost(isCost) {
    if (isCost == true) {
        memory.innerText = "180";
    }
    else {
        memory.innerText = "0";
    }
}
/* stroage cost */
const storage = document.getElementById("storage-cost");

function storageCost(isStorageCost) {
    if (isStorageCost == 1) {
        storage.innerText = "0";
    }
    else if (isStorageCost == 2) {
        storage.innerText = "100";
    }
    else {
        storage.innerText = "180";
    }

}
/* delivary cost */
const delivary = document.getElementById("delivary-cost");

function delivaryCost(isDelivaryCost) {
    if (isDelivaryCost == true) {
        delivary.innerText = "0";
    }
    else {
        delivary.innerText = "20";
    }
}

/* update total */
const footerTotalPrice = document.getElementById('footer-total-price');
const totalPrice = document.getElementById("total-price");
const bestPrice = document.getElementById('best-price');

function updateTotalPrice() {
    const storageTotal = Number(storage.innerText);
    const bestPriceTotal = Number(bestPrice.innerText)
    const delivaryTotal = Number(delivary.innerText);
    const memoryTotal = Number(memory.innerText)
    const totalPriceAll = storageTotal + memoryTotal + delivaryTotal + bestPriceTotal;
    totalPrice.innerText = totalPriceAll;
    footerTotalPrice.innerText = totalPriceAll;
}
/* footer update */

const discountInput = document.getElementById('discount-input');
function discountBtn() {
    let discount = discountInput.value;
    let totaldiscount = parseInt(totalPrice.innerText);
    if (discount === "stevekaku") {
        let newTotal =20% totaldiscount;
        footerTotalPrice.innerText = newTotal;
    }
    else {
        return;
    }
    discountInput.value = "";
}

// clicking handel
document.getElementById('button-memory-8GB').addEventListener('click', function () {
    MemoryCost(false);
    updateTotalPrice()
});
document.getElementById('button-memory-16GB').addEventListener('click', function () {
    MemoryCost(true);
    updateTotalPrice()
});
document.getElementById('button-storage-256GB').addEventListener('click', function () {
    storageCost(1);
    updateTotalPrice()
});
document.getElementById('button-storage-512GB').addEventListener('click', function () {
    storageCost(2);
    updateTotalPrice()
});
document.getElementById('button-storage-1TB').addEventListener('click', function () {
    storageCost(3);
    updateTotalPrice()
});
document.getElementById('button-delivery-free').addEventListener('click', function () {
    delivaryCost(true);
    updateTotalPrice()
});
document.getElementById('button-delivery-cost').addEventListener('click', function () {
    delivaryCost(false);
    updateTotalPrice()
});