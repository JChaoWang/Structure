// 1.方法参数验证
const isRequired = () => {
  throw new Error('param is required');
};

const print = (num = isRequired()) => {
  console.log(`printing ${num}`);
};

print(2); //printing 2
// print(); // error
// print(null); //printing null
