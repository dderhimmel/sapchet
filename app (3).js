document.addEventListener('DOMContentLoaded'/* html and css loaded before js*/, () => {


    let currentArr = []
    let board = []
    let squa =[]
    function createBoard() {
        let squares = [], arr = []
        let width = 6
        for(let i=0;i<width*width;i++) {
            const square = document.createElement('div')
            square.setAttribute('id',i) 
            grid.appendChild(square)
            squa.push(square)
        }

        for(let i=0;i<width*width;i++){
            let square=document.getElementById(i)
            square.addEventListener('contextmenu', function(e) {
                e.preventDefault()
                click(square)
                // squa[square.id].innerHTML=currentArr[0]
                // squa[square.id+1].innerHTML=currentArr[1]
            })

        }
        // for(let i=0;i <width*width;i++) {
        //     square.addEventListener('contextmenu', function(e) {
        //         e.preventDefault()
        //         click(square)
        //         //let d= square.id+1
        //        // squares[square.id].innerHTML=currentArr[0]
        //         //squares[d].innerHTML=1
        //         // squares[square.id+6].innerHTML=currentArr[2]
        //         // squares[square.id+7].innerHTML=currentArr[3]
        //     })
        // }
        for(let i=0;i<width*width;i++)
            arr[i] = 0
        arr[16] = 4
        arr[17] = 2
        arr[23] = 3
        arr[24] = 2
        for(let i=0;i<width;i++){
            board[i]=[]
            for(let j=0;j<width;j++)
            board[i][j]=arr[i*width+j]
        }
        squa[16].innerHTML=4
        squa[17].innerHTML=2
        squa[22].innerHTML=3
        squa[23].innerHTML=2
        
    }
    const grid = document.querySelector('.grid') 
    createBoard()

    function click(square) {
        if ((square.id+1)%4==1) {
            board[square.id/6][square.id/6+square.id%6]=currentArr[0];
            board[square.id/6][square.id/6+square.id%6+1]=currentArr[1];
            board[square.id/6+1][square.id/6+square.id%6]=currentArr[2];
            board[square.id/6+1][square.id/6+square.id%6+1]=currentArr[3];
            squa[square.id].target.innerHTML=currentArr[0]
            squa[square.id+1].target.innerHTML=currentArr[1]
        }

    }

    function create1() {
        let width=2
        let squares = [], arr=[]
        for(let i=0;i<width*width;i++) {
            const square = document.createElement('div')
            square.setAttribute('id',i) 
            grid1.appendChild(square)
            squares.push(square)
        }
        arr[0]=4, arr[1]=3, arr[2]=1, arr[3]=1
        for(let i=0;i<4;i++)
        squares[i].innerHTML=arr[i]
        arr[0]=4,arr[1]=3,arr[2]=1,arr[3]=1
        grid1.addEventListener('click', function(e) {
            rotate(grid1)
            for(let i=0;i<4;i++)
            squares[i].innerHTML=arr[i]
        })
        function rotate(grid){
            let a=arr[0], b=arr[1], c=arr[2], d=arr[3]
            arr[0]=b
            arr[1]=d
            arr[2]=a
            arr[3]=c
        }
    }
    const grid1 = document.querySelector('.grid1') 
    create1()
    
    function create2() {
        let width=2
        let squares = [], arr=[]
        for(let i=0;i<width*width;i++) {
            const square = document.createElement('div')
            square.setAttribute('id',i) 
            grid2.appendChild(square)
            squares.push(square)
        }
        arr[0]=2, arr[1]=2, arr[2]=4, arr[3]=4
        for(let i=0;i<4;i++)
        squares[i].innerHTML=arr[i]
        grid2.addEventListener('click', function(e) {
            rotate(grid2)
            for(let i=0;i<4;i++)
            squares[i].innerHTML=arr[i]
        })
        function rotate(grid){
            let a=arr[0], b=arr[1], c=arr[2], d=arr[3]
            arr[0]=b
            arr[1]=d
            arr[2]=a
            arr[3]=c
        }
    }
    const grid2 = document.querySelector('.grid2') 
    create2()

    function create3() {
        let width=2
        let squares = [], arr= []
        for(let i=0;i<width*width;i++) {
            const square = document.createElement('div')
            square.setAttribute('id',i) 
            grid3.appendChild(square)
            squares.push(square)
        }
        arr[0]=4, arr[1]=2, arr[2]=2, arr[3]=4
        for(let i=0;i<4;i++)
        squares[i].innerHTML=arr[i]
        grid3.addEventListener('click', function(e) {
            rotate(grid3)
            for(let i=0;i<4;i++)
            squares[i].innerHTML=arr[i]
        })
        function rotate(grid){
            let a=arr[0], b=arr[1], c=arr[2], d=arr[3]
            arr[0]=b
            arr[1]=d
            arr[2]=a
            arr[3]=c
        }
    }
    const grid3 = document.querySelector('.grid3') 
    create3()

    function create4() {
        let width=2
        let squares = [], arr = []
        for(let i=0;i<width*width;i++) {
            const square = document.createElement('div')
            square.setAttribute('id',i) 
            grid4.appendChild(square)
            squares.push(square)
        }
        arr[0]=1, arr[1]=2, arr[2]=4, arr[3]=4
        for(let i=0;i<4;i++)
        squares[i].innerHTML=arr[i]
        grid4.addEventListener('click', function(e) {
            rotate(grid4)
            for(let i=0;i<4;i++)
            squares[i].innerHTML=arr[i]
        })
        function rotate(grid){
            let a=arr[0], b=arr[1], c=arr[2], d=arr[3]
            arr[0]=b
            arr[1]=d
            arr[2]=a
            arr[3]=c
        }
    }
    const grid4 = document.querySelector('.grid4') 
    create4()

    function create5() {
        let width=2
        let squares = [], arr =[]
        for(let i=0;i<width*width;i++) {
            const square = document.createElement('div')
            square.setAttribute('id',i) 
            grid5.appendChild(square)
            squares.push(square)
        }
        arr[0]=2, arr[1]=3, arr[2]=3, arr[3]=1
        for(let i=0;i<4;i++)
        squares[i].innerHTML=arr[i]
        grid5.addEventListener('click', function(e) {
            rotate(grid5)
            for(let i=0;i<4;i++)
            squares[i].innerHTML=arr[i]
        })
        function rotate(grid){
            let a=arr[0], b=arr[1], c=arr[2], d=arr[3]
            arr[0]=b
            arr[1]=d
            arr[2]=a
            arr[3]=c
        }
    }
    const grid5 = document.querySelector('.grid5') 
    create5()

    function create6() {
        let width=2
        let squares = [], arr = []
        for(let i=0;i<width*width;i++) {
            const square = document.createElement('div')
            square.setAttribute('id',i) 
            grid6.appendChild(square)
            squares.push(square)
        }
        arr[0]=4, arr[1]=4, arr[2]=3, arr[3]=4
        for(let i=0;i<4;i++)
        squares[i].innerHTML=arr[i]
        grid6.addEventListener('click', function(e) {
            rotate(grid6)
            for(let i=0;i<4;i++)
            squares[i].innerHTML=arr[i]
        })
        function rotate(grid){
            let a=arr[0], b=arr[1], c=arr[2], d=arr[3]
            arr[0]=b
            arr[1]=d
            arr[2]=a
            arr[3]=c
        }
    }
    const grid6 = document.querySelector('.grid6') 
    create6()

    function create7() {
        let width=2
        let squares = [], arr =[]
        for(let i=0;i<width*width;i++) {
            const square = document.createElement('div')
            square.setAttribute('id',i) 
            grid7.appendChild(square)
            squares.push(square)
        }
        arr[0]=4, arr[1]=2, arr[2]=1, arr[3]=3
        for(let i=0;i<4;i++)
        squares[i].innerHTML=arr[i]
        
        grid7.addEventListener('click', function(e) {
            rotate(grid7)
            for(let i=0;i<4;i++)
            squares[i].innerHTML=arr[i]
        })
        function rotate(grid){
            let a=arr[0], b=arr[1], c=arr[2], d=arr[3]
            arr[0]=b
            arr[1]=d
            arr[2]=a
            arr[3]=c
        }
    }
    const grid7 = document.querySelector('.grid7') 
    create7()

    function create8() {
        let width=2
        let squares = [], arr =[]
        for(let i=0;i<width*width;i++) {
            const square = document.createElement('div')
            square.setAttribute('id',i) 
            grid8.appendChild(square)
            squares.push(square)
        }
        arr[0]=4, arr[1]=2, arr[2]=1, arr[3]=3
        for(let i=0;i<4;i++)
        squares[i].innerHTML=arr[i]
        
        grid8.addEventListener('click', function(e) {
            rotate(grid8)
            for(let i=0;i<4;i++)
            squares[i].innerHTML=arr[i]
        })
        function rotate(grid){
            let a=arr[0], b=arr[1], c=arr[2], d=arr[3]
            arr[0]=b
            arr[1]=d
            arr[2]=a
            arr[3]=c
        }
        // grid8.oncontextmenu = function(e) {
        //     e.preventDefault()
        //     let a=arr[0], b=arr[1], c=arr[2], d=arr[3]
        //     currentArr[0]=a, currentArr[1]=b, currentArr[2]=c, currentArr[3]=d
        // }
        grid8.addEventListener('contextmenu',function(e){
            // match(grid8)
            e.preventDefault()
            let a=arr[0], b=arr[1], c=arr[2], d=arr[3]
            currentArr[0]=a, currentArr[1]=b, currentArr[2]=c, currentArr[3]=d
        })
        // function match(grid){
        //     let a=arr[0], b=arr[1], c=arr[2], d=arr[3]
        //     currentArr[0]=a, currentArr[1]=b, currentArr[2]=c, currentArr[3]=d
        // } 
        //console.log(currentArr[0])
    }
    const grid8 = document.querySelector('.grid8') 
    create8()

    
    
    
})