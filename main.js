const calc = {
    // --VARIABLES --
    inputArr: [],
    value1: null, //float number
    value2: null, //float number
    operatorTriggered: false,
    operatorValue: null,
    decPointTriggered: false,
    maxLength: 10, //max number of ditits on display

    // --UTILITIES--

    //f. to update DOM
    pushToDisplay(val) {
        document.getElementById("calc-result").value = this.throwError(val);
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
    },

    //f. to trim displayed values up to maxLength
    trimToDisplay(val) {
        //throw errror if val exceeds maxNumber
        const maxNumber = parseInt("9".repeat(this.maxLength));
        if (val > maxNumber) {
            val = "ERR";
            this.clear();
        }

        // trim currentNum if exceeds maxLength
        val.toString().length > this.maxLength
            ? (val = parseFloat(val.toString().slice(0, this.maxLength)))
            : null;

        //display trimmed currentNum (value1 stays untrimmed!)
        this.pushToDisplay(val);
    },


    // --OPERATION FUNCTIONS--
    // each is bound to key(s) on calc

    // Keys 0-9 and BACKSPACE
    display(num) {
        //checking if backspace key was pressed (value == -1)
        if (num === -1) {
            //if yes, last digit is popped out
            this.inputArr.pop();
            //ensuring that inputArr is not empty as a result of backspace
            this.inputArr.length === 0 ? this.inputArr.push(0) : null;
        } else {
            //adding input to array (values between 0 and 9)
            this.inputArr.push(num);
        }

        //ensuring inputArr has no more than one zero as first digit
        this.inputArr[0] === 0 && this.inputArr[1] === 0
            ? this.inputArr.shift()
            : null;

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

        //for debugging - uncomment if necessary
        // console.log(calc);
    },

    //Key DECIMAL POINT
    decPoint() {
        if (!this.decPointTriggered) {
            //check if there is an integer before decimal point
            this.inputArr.length > 0
                ? this.inputArr.push(".")
                : this.inputArr.push("0.");
            this.decPointTriggered = true;
        }
    },

    //Keys ADD, SUBTRACT, MULTIPLY, DIVIDE
    trigger(val) {
        //allows chaining operations if opperator is triggered the second time ex. 1 + 3 + 4
        if (this.operatorTriggered) {
            this.operate();
        }

        //changing bools and operator value
        this.operatorTriggered = true;
        this.operatorValue = val;
        this.inputArr = [];
    },

    //Key EQUAL SIGN
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
                this.value2 !== 0
                    ? (result = this.value1 / this.value2)
                    : (result = "JUST NO.");
                break;
            case "*":
                result = this.value1 * this.value2;
                break;
            default:
                this.pushToDisplay("WTF");
        }
        //clear values and bools
        this.clear();

        //set result as value1
        this.value1 = result;

        //display trimmed result (value1 stays untrimmed!)
        // this.pushToDisplay(result);
        this.trimToDisplay(result);

        //for debugging - uncomment if necessary
        console.log(calc);
    },

    //Keys SQUARE ROOT OF X and X SQUARED
    triggerSingle(val) {
        let currentNum = null;

        //math operation
        switch (val) {
            case "sqrtX":
                currentNum = Math.sqrt(this.value1);
                break;
            case "sqrX":
                currentNum = Math.pow(this.value1, 2);
                break;
            default:
                currentNum = NaN;
        }

        //clear values and bools
        this.clear();

        //set currentNum as value1
        this.value1 = currentNum;

        //trimming and pushing to display
        this.trimToDisplay(currentNum);

        //for debugging - uncomment if necessary
        console.log(calc);
    },
};
