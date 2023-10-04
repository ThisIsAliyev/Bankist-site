//Animations:

const observer1 = new IntersectionObserver((entries) => {
    entries.forEach(
        (entry) => {
            if(entry.isIntersecting) {
                entry.target.classList.add('show');
                observer1.unobserve(entry.target);
            } else {
                entry.target.classList.remove('show');
            }
        }
    )
})

let blurImages = document.querySelectorAll('.blur');
blurImages.forEach(
    (image) => {
        observer1.observe(image);
    }
)

const observer2 = new IntersectionObserver((entries) => {
    entries.forEach(
        (entry) => {
            if(entry.isIntersecting) {
                entry.target.classList.add('moveUp');
                observer2.unobserve(entry.target);
            } else {
                entry.target.classList.remove('moveUp');
            }
        }
    )
})

let headerSection = document.querySelectorAll('.area');
headerSection.forEach(
    (moveUp) => {
        observer2.observe(moveUp);
    }
)


//Button onClick

const operations = document.querySelectorAll('.operations-button');

operations.forEach(
    (clickButton,index) => {
        clickButton.addEventListener('click',() => {
            operations.forEach(
                (operation,i) => {
                    if(index != i) {
                        operation.style.transform = 'translateY(0%)';
                    }
                }
            )
            clickButton.style.transform = 'translateY(-30%)';
            let operationsText = document.querySelectorAll('.operations-text');
            let icon = document.getElementById('icon');
            console.log(icon.className);
        
            switch (index) {
                case 0:
                    operationsText[0].innerHTML = 'Tranfser money to anyone, instantly! No fees, no BS.';
                    operationsText[1].innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.';
                    icon.className = 'fa-solid fa-arrow-up-from-bracket'
                    icon.style.backgroundColor = 'rgba(255, 205, 3, 0.192)';
                    icon.style.color = 'rgb(255, 187, 0)';
                    break;

                case 1:
                    operationsText[0].innerHTML = 'Buy a home or make your dreams come true, with instant loans.';
                    operationsText[1].innerHTML = 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
                    icon.className = 'fa-solid fa-house'
                    icon.style.backgroundColor = 'rgba(94, 197, 118, 0.227)';
                    icon.style.color = 'rgb(94, 197, 118)';
                    break;

                case 2:
                    operationsText[0].innerHTML = 'No longer need your account? No problem! Close it instantly.';
                    operationsText[1].innerHTML = 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.';
                    icon.className = 'fa-solid fa-user-xmark'
                    icon.style.backgroundColor = 'rgba(255, 88, 96, 0.176)';
                    icon.style.color = 'rgb(255, 88, 95)';
                    break;
            }
        })
    }
)
const rightClick = document.querySelector('.fa-chevron-right');
const leftClick = document.querySelector('.fa-chevron-left');

let x = 36.5;
rightClick.addEventListener('click',() => {
    let texts = document.querySelector('.texts');
    x -= 36.5;
    if(x < -36.5) {
        x = 36.5;
    }
    texts.style.transform = `translate(${x}%)`;
})

leftClick.addEventListener('click',() => {
    let texts = document.querySelector('.texts');
    x += 36.5;
    if(x > 36.5) {
        x = -36.5;
    }
    texts.style.transform = `translate(${x}%)`;
})

let dot = document.querySelectorAll('.dot');
document.querySelectorAll('.click').forEach(
    (button) => {
        button.addEventListener('click',() => 
        {
            dot.forEach(
                (item,index) =>{
                    if(x === 36.5 && index === 0) {
                        item.style.backgroundColor = 'rgb(56, 56, 56)'
                    } else if(x === 0 && index === 1) {
                        item.style.backgroundColor = 'rgb(56, 56, 56)'
                    } else if(x === -36.5 && index === 2) {
                        item.style.backgroundColor = 'rgb(56, 56, 56)'
                    } else {
                        item.style.backgroundColor = 'gray'
                    }
                    }
            )
                } 
            ) 
        })


        let formEl = document.querySelector('.form-section');
        
        function displayFlex() {
            formEl.style.display = 'flex';
            document.querySelector('main').style.filter = 'blur(10px)'
            document.querySelector('header').style.filter = 'blur(10px)'
            document.querySelector('.overlay').style.display = 'inline-block'
        }

        function displayNone() {
            formEl.style.display = 'none';
            document.querySelector('main').style.filter = 'none'
            document.querySelector('.overlay').style.display = 'none'
            document.querySelector('header').style.filter = 'blur(0)'
        }

        let hoverEl = document.querySelectorAll('.hover-el');
        hoverEl.forEach((item) => {
            item.addEventListener('mouseover',(event) => {
                hoverEl.forEach(
                    (a) => {
                        a.style.opacity = '0.55';
                    }
                )
                event.target.style.opacity = '1';
            })
            item.addEventListener('mouseleave' ,(el) => {
                hoverEl.forEach(
                    (a) => {
                        a.style.opacity = '1';
                    }
                )
            })
        }
        )