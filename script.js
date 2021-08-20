function MemoryCost(isCost){
    const memory = document.getElementById("memory-cost");
    if(isCost==true){
        memory.innerText= "180";
    }
    else{
        memory.innerText = 0;
    }
}
function storageCost(isStorageCost){
    const storage = document.getElementById("storage-cost");
    if(isStorageCost == 1){
        storage.innerText = 0;
    }
    else if(isStorageCost == 2){
        storage.innerText= "100";
    }
    else{
        storage.innerText ="180";
    }
}
function delivaryCost(isDelivaryCost){
    const delivary = document.getElementById("delivary-cost");
    if(isDelivaryCost== true){
        delivary.innerText = 0;
    }
    else{
        delivary.innerText= 20;
    }

}

document.getElementById('button-memory-8GB').addEventListener('click', function(){
   MemoryCost(false);
});
document.getElementById('button-memory-16GB').addEventListener('click', function(){
    MemoryCost(true);
});
document.getElementById('button-storage-256GB').addEventListener('click', function(){
    storageCost(1);
});
document.getElementById('button-storage-512GB').addEventListener('click', function(){
    storageCost(2);
});
document.getElementById('button-storage-1TB').addEventListener('click', function(){
   storageCost(3);
});
document.getElementById('button-delivery-free').addEventListener('click', function(){
    delivaryCost(true);
});
document.getElementById('button-delivery-cost').addEventListener('click', function(){
    delivaryCost(false);
});