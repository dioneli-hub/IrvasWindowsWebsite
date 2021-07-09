import checkNumInputs from "./checkNumInputs";

const changeModalState = (state) => {
    const windowShapes = document.querySelectorAll('.balcon_icons_img'),
        windowWidth = document.querySelectorAll('#width'),
        windowHeight = document.querySelectorAll('#height'),
        windowType = document.querySelectorAll('#view_type'),
        windowProfile = document.querySelectorAll('.checkbox');

    checkNumInputs('#width');
    checkNumInputs('#height');

    function bindActionToElems (event, elem, property){
        elem.forEach((item, i)=>{
            item.addEventListener(event, ()=>{
                if(elem.length > 1){
                    state[property] = i;
                } else {
                   state[property]  = item.value;
                }
                console.log(state);
            });
        });
    }

    bindActionToElems('click', windowShapes, 'shape');
    bindActionToElems('input', windowHeight, 'height');
    bindActionToElems('input', windowWidth, 'width');
}

export default changeModalState;