    trimToDisplay(val) {
        let trimmedVal = val;
        let maxNumber = parseInt("9".repeat(this.maxLength));
        console.log(trimmedVal, maxNumber);

        //a series of checks
        val > maxNumber
            ? (trimmedVal = "ERR") //if value exceeds maxNumber error is pushed to display
            : toString(val).length > this.maxLength //check for numbers after decimal point
            ? (trimmedVal = parseFloat(toString(val).slice(0, this.maxLength))) //value is trimmed to this.maxLength
            : null; //value is NOT trimmed

        // console.log(`trim check: ${val} < ${maxNumber}`, val < maxNumber);

        return trimmedVal;

        //old trim function
        //trim currentNum if exceeds maxLength
        // currentNum.toString().length > this.maxLength
        //     ? (currentNum = parseFloat(
        //           this.value1.toString().slice(0, this.maxLength)
        //       ))
        //     : null;

        // //display trimmed currentNum (value1 stays untrimmed!)
        // this.pushToDisplay(currentNum);
    },