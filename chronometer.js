        let centesimal = 0
        let centesimalStr = '00'
        let second = 0
        let secondStr = '00'
        let minute = 0
        let minuteStr = '00'
        let isActive = false
        
        function run() {

            const interval = setInterval(() => {
                document.querySelector('#minute').innerHTML = minuteStr
                document.querySelector('#second').innerHTML = secondStr
                document.querySelector('#centesimal').innerHTML = centesimalStr
                if (centesimal < 9) {
                    centesimalStr = "0" + (centesimal += 1)
                } else {
                    centesimalStr = centesimal += 1
                }
                if (centesimal === 100) {
                    if (second < 9) {
                        secondStr = "0" + (second += 1)
                    } else {
                        secondStr = second += 1
                    }
                    centesimalStr = '00'
                    centesimal = 0
                }
                if (second === 60) {        
                    if (minute < 9) {
                        minuteStr = "0" + (minute += 1)
                    } else {
                        minuteStr = minute += 1
                    }
                    secondStr = '00'
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
            centesimalStr = '00'
            second = 0
            secondStr = '00'
            minute = 0
            minuteStr = '00'
            document.querySelector('#minute').innerHTML = minuteStr
            document.querySelector('#second').innerHTML = secondStr
            document.querySelector('#centesimal').innerHTML = centesimalStr
        }