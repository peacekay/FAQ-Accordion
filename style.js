const items = [... document.querySelectorAll("li.faq_faq-item")];

const clearItem = (itemDetail) => {
    itemDetail.style.maxHeight = null
}

const activateItem = (itemDetail) => {
    const scrollHeight = itemDetail.scrollHeight
    itemDetail.style.maxHeight = `${scrollHeight}px`
}

const handleItemClick = (event) => {
    const clickedItem = event.target.closest("li");
    const itemDetail = clickedItem.querySelector(".faq-item_detail");
    const clickedItemActive = clickedItem.classList.contains('active');
    clickedItem.classList.toggle('active')
    if (clickedItemActive) {
        clearItem(itemDetail)
    } else {
        activateItem(itemDetail)
    }
}

const addListenersToItems = (array, callback) => {
    array.forEach(item => {
        item.addEventListener('click', (event) => {
           callback(event)
       })
   }) 
}

addListenersToItems(items, handleItemClick);