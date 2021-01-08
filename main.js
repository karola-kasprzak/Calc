const calc = {
    // --VARIABLES --
    inputArr: [],
    value1: null, //float number
    value2: null, //float number
    operatorTriggered: false,
    operatorValue: null,
    decPointTriggered: false,
    maxLength: 10, //num ditits on display

    // --UTILITIES--

    //f. to update DOM
    pushToDisplay(val) {
        let displayVal = val;
        document.getElementById("calc-result").value = this.throwError(
            displayVal
        );
    },

    //function clearing value strings
    clear() {
        this.value1 = null;
        this.value2 = null;
        this.operatorTriggered = false;
        this.operatorValue = null;
        this.decPointTriggered = false;
        this.inputArr = [];
        this.pushToDisplay(0);
        console.log(calc);
    },

    //TO BE FIXED
    //f. to trim displayed values up to maxLength
    trimToDisplay(val) {
        let trimmedVal = val;
        let maxNumber = parseInt("9".repeat(this.maxLength));

        //a series of checks
        val > maxNumber
            ? (trimmedVal = "ERR") //if value exceeds maxNumber error is pushed to display
            : toString(val).length > this.maxLength //check for numbers after decimal point
            ? (trimmedVal = parseFloat(toString(val).slice(0, this.maxLength))) //value is trimmed to this.maxLength
            : null; //value is NOT trimmed

        // console.log(`trim check: ${val} < ${maxNumber}`, val < maxNumber);

        return trimmedVal;

        //old trim function
        //************************************************
        //trim currentNum if exceeds maxLength
        // currentNum.toString().length > this.maxLength
        //     ? (currentNum = parseFloat(
        //           this.value1.toString().slice(0, this.maxLength)
        //       ))
        //     : null;

        // //display trimmed currentNum (value1 stays untrimmed!)
        // this.pushToDisplay(currentNum);
    },

    //if input is not a number Error is displayed in DOM and all variables are cleared
    throwError(val) {
        if (typeof val !== "number") {
            this.clear();
            val = "ERR";
        }
        return val;
    },

    // --OPERATION FUNCTIONS--

    // f. updating variables and displaying values
    display(num) {
        //adding input to array
        this.inputArr.push(num);

        //trimming input to 10 digits by limit input array lenght
        if (this.inputArr.length > this.maxLength) {
            this.inputArr = this.inputArr.slice(0, this.maxLength);
        }

        //converting input array to a number as variable currentNum
        let currentNum = parseFloat(this.inputArr.join(""));

        // storing currentNumber as value1 or value2
        this.operatorTriggered
            ? (this.value2 = currentNum)
            : (this.value1 = currentNum);

        // pushing current number to display
        this.pushToDisplay(currentNum);
        console.log(calc);
    },

    //f. adding a decimal point to value
    decPoint() {
        if (!this.decPointTriggered) {
            //check if there is an integer before decimal point
            this.inputArr.length > 0
                ? this.inputArr.push(".")
                : this.inputArr.push("0.");
            this.decPointTriggered = true;
        }
    },

    //function for triggering operators for double value operations
    trigger(val) {
        //chaining operations if opperator is triggered the second time ex. 1 + 3 + 4
        if (this.operatorTriggered) {
            this.operate();
        }

        //changing bools and operator value
        this.operatorTriggered = true;
        this.operatorValue = val;
        this.inputArr = [];

        console.log(calc);
    },

    //f. calculating the result chosen mathematical operation
    operate() {
        let result = null;

        switch (this.operatorValue) {
            case "+":
                result = this.value1 + this.value2;
                break;
            case "-":
                result = this.value1 - this.value2;
                break;
            case "/":
                result = this.value1 / this.value2;
                break;
            case "*":
                result = this.value1 * this.value2;
                break;
            default:
                this.pushToDisplay("ERR");
        }
        //clear values and bools
        this.clear();

        //set result as value1
        this.value1 = result;

        //display trimmed result (value1 stays untrimmed!)
        this.pushToDisplay(result);

        //for debugging - uncomment if necessary
        console.log(calc);
    },

    //function for finding square root of x
    sqrtX() {
        //math operation
        let currentNum = Math.sqrt(this.value1);

        //clear values and bools
        this.clear();

        //set currentNum as value1
        this.value1 = currentNum;

        //trim currentNum if exceeds maxLength
        currentNum.toString().length > this.maxLength
            ? (currentNum = parseFloat(
                  this.value1.toString().slice(0, this.maxLength)
              ))
            : null;

        //display trimmed currentNum (value1 stays untrimmed!)
        this.pushToDisplay(currentNum);

        console.log(calc);
    },

    //function for squaring value1
    sqrX() {
        //math operation
        let currentNum = Math.pow(this.value1, 2);

        //clear values and bools
        this.clear();

        //set currentNum as value1
        this.value1 = currentNum;

        //trim currentNum if exceeds maxLength
        currentNum.toString().length > this.maxLength
            ? (currentNum = parseFloat(
                  this.value1.toString().slice(0, this.maxLength)
              ))
            : null;

        //display trimmed currentNum (value1 stays untrimmed!)
        this.pushToDisplay(currentNum);

        console.log(calc);
    },

    // DO ZROBIENIA
    //f. backspace
    backSpace() {
        // this.inputArr.pop();
        // console.log(calc);
    },
};
