const draggability = (function drag() {
  return {
    init() {
      const draggableElements = document.querySelectorAll('#draggableItemsSection img');
      const dropTarget = document.querySelector('#droppableSection');

      draggableElements.forEach(img => {
        img.addEventListener('dragstart', ev => {
          ev.dataTransfer.setData('text/plain', ev.target.id);
        });
      });

      dropTarget.addEventListener('dragenter', ev => {
        this.stopDefaultBehavior(ev);
      });
      dropTarget.addEventListener('dragover', ev => {
        this.stopDefaultBehavior(ev);
      });
      dropTarget.addEventListener('drop', ev => {
        const draggedElementId = ev.dataTransfer.getData('text/plain');
        console.log(' ⚡️', draggedElementId);
        dropTarget.appendChild(document.getElementById(draggedElementId));
        this.stopDefaultBehavior(ev);
      });
    },
    stopDefaultBehavior(ev) {
      ev.stopImmediatePropagation();
      ev.preventDefault();
    }
  };
})();

export default draggability;
