const calc = {
    // inputString: "",
    // PO CO TO???
    // displayResult: null,
    //pushed to display - input will check for strings, if not then result will be cleared, limited to 10 characters

    inputArr: [],
    value1: null, //float number
    value2: null, //float number
    operatorTriggered: false,
    operatorValue: null,
    decPointTriggered: false,
    maxLength: 10,

    pushToDisplay(val) {
        document.getElementById("calc-result").value = val;
    },

    // f. updating and displaying values
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
                document.getElementById("calc-result").value = "ERR";
        }
        this.clear();
        this.value1 = result;
        this.pushToDisplay(this.value1);
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
