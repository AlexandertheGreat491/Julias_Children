// Function to do basic mathematical operation in handlebar
module.exports = {
  // Math helper found here: https://stackoverflow.com/a/46317662
  math: (lvalue, operator, rvalue) => {
    lvalue = parseFloat(lvalue);
    rvalue = parseFloat(rvalue);
    return {
      '+': lvalue + rvalue,
      '-': lvalue - rvalue,
      '*': lvalue * rvalue,
      '/': lvalue / rvalue,
      '%': lvalue % rvalue,
    }[operator];
  },

  dropdownSelect:
    ('select',
    function (value, options) {
      return options
        .fn()
        .split('\n')
        .map(function (v) {
          var t = 'value="' + value + '"';
          return RegExp(t).test(v) ? v.replace(t, t + ' selected="selected"') : v;
        })
        .join('\n');
    }),
};
