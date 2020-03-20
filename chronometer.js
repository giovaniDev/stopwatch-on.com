        let centesimal = 0
        let second = 0
        let minute = 0
        let isActive = false
        
        function run() {

            const interval = setInterval(() => {
                centesimal += 1
                document.querySelector('#centesimal').innerHTML = centesimal
                if (centesimal === 100) {
                    second += 1
                    document.querySelector('#second').innerHTML = second
                    centesimal = 0
                    
                }
                if (second === 10) {        
                    minute += 1
                    document.querySelector('#minute').innerHTML = minute
                    second = 0
                    document.querySelector('#second').innerHTML = second
                    
                }
                if (isActive === false) {
                    document.querySelector('#run').innerHTML = 'Run'
                    clearInterval(interval)
                }
            }, 10);
        }

        function setActive() {
            isActive = isActive === true ? false : true

            if (isActive === true) {
                document.querySelector('#run').innerHTML = 'Pause'
                run()
            }
        }

        function reset() {
            centesimal = 0
            second = 0
            minute = 0
            document.querySelector('#minute').innerHTML = minute
            document.querySelector('#second').innerHTML = second
            document.querySelector('#centesimal').innerHTML = centesimal
        }