        let centesimal = 0
        let second = 0
        let minute = 0
        let isActive = false
        
        function run() {

            const interval = setInterval(() => {
                document.querySelector('#stopwatch').innerHTML = `${minute}: ${second}: ${centesimal}`
                centesimal += 1
                if (centesimal === 100) {
                    second += 1
                    centesimal = 0
                }
                if (second === 10) {        
                    minute += 1
                    second = 0 
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
            document.querySelector('#stopwatch').innerHTML = `${minute}: ${second}: ${centesimal}`
        }