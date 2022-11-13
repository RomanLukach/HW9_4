// Export by default
const calculateBonus = (a, b) => {
    let bonus;
    let sum = a + b
//    debugger;
    sum > 50 ? (bonus = 50) : (bonus = sum);
//    debugger;
    return bonus;
    };
    
module.exports = calculateBonus;