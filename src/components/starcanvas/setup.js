import { ref, watch } from "vue";

// 配置
const point = 80; // 生成的星星（点）的个数, 默认25个
const lineColor = "rgba(0, 0, 0, 0.8)"; // 线的颜色
const roundColor = "rgba(60, 59, 81, 0.8)"; // 星星的颜色

// 动态参数
const docWidth = ref(0); // 画布宽
const docHeight = ref(0); // 画布高
const context = ref(null); // canvasDom的执行上下文
const circleArr = ref([]); // 圆点数组
const timer = ref(null); // 定时器对象

/**
 * 生成min和max之间随机数
 */
function rangeRadom(max, min) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

/**
 * 绘制原点
 */
function drawCircle(context, x, y, r, moveX, moveY) {
  let circle = {
    x,
    y,
    r,
    moveX,
    moveY
  };
  context.beginPath();
  context.arc(circle.x, circle.y, circle.r, 0, 2 * Math.PI);
  context.closePath();
  context.fill();
  return circle;
}

/**
 * 绘制线条
 */
function drawLine(context, beginX, beginY, closeX, closeY, opacity) {
  context.beginPath();
  context.strokeStyle = `rgba(60, 59, 81, ${opacity})`;
  context.moveTo(beginX, beginY);
  context.lineTo(closeX, closeY);
  context.closePath();
  context.stroke();
}
/**
 * 生成圆点数组
 */
function createCircleArr() {
  for (let i = 0; i < point; i++) {
    circleArr.value.push(
      drawCircle(
        context.value,
        rangeRadom(docWidth.value, 0),
        rangeRadom(docHeight.value, 0),
        rangeRadom(15, 2),
        rangeRadom(10, -10) / 40,
        rangeRadom(10, -10) / 40
      )
    );
  }
}
/**
 * 每一帧绘制
 */
function draw() {
  context.value.clearRect(0, 0, docWidth.value, docHeight.value);
  // 循环绘制点
  for (let i = 0; i < point; i++) {
    drawCircle(
      context.value,
      circleArr.value[i].x,
      circleArr.value[i].y,
      circleArr.value[i].r
    );
  }
  // 循环绘制线
  for (let i = 0; i < point; i++) {
    for (let j = 0; j < point; j++) {
      if (i + j < point) {
        let A = Math.abs(circleArr.value[i + j].x - circleArr.value[i].x);
        let B = Math.abs(circleArr.value[i + j].y - circleArr.value[i].y);
        let lineLength = Math.sqrt(A * A + B * B);
        let C = (1 / lineLength) * 7 - 0.009;
        let lineOpacity = C > 0.03 ? 0.03 : C;
        if (lineOpacity > 0) {
          drawLine(
            context.value,
            circleArr.value[i].x,
            circleArr.value[i].y,
            circleArr.value[i + j].x,
            circleArr.value[i + j].y,
            lineOpacity
          );
        }
      }
    }
  }
}

/**
 * 循环绘制
 */
function cycleDraw() {
  timer.value = setInterval(() => {
    for (let i = 0; i < point; i++) {
      let cir = circleArr.value[i];
      cir.x += cir.moveX;
      cir.y += cir.moveY;
      if (cir.x > docWidth.value) {
        cir.x = 0;
      } else if (cir.x < 0) {
        cir.x = docWidth.value;
      }
      if (cir.y > docHeight.value) {
        cir.y = 0;
      } else if (cir.y < 0) {
        cir.y = docHeight.value;
      }
    }
    draw();
  }, 10);
}

// 获取dom
export const canvasDom = ref(null);
watch(canvasDom, (value) => {
  if (value) {
    // 取画布的高宽来设置显示分辨率
    docWidth.value = canvasDom.value.offsetWidth;
    docHeight.value = canvasDom.value.offsetHeight;

    // 设置画布分辨率
    canvasDom.value.width = canvasDom.value.offsetWidth;
    canvasDom.value.height = canvasDom.value.offsetHeight;

    // 初始化canvas上下文
    context.value = canvasDom.value.getContext("2d");

    // 设置线条和星星颜色
    context.value.strokeStyle = lineColor;
    context.value.lineWidth = 1;
    context.value.fillStyle = roundColor;

    // 初始化
    createCircleArr(); // 设置星星数组
    draw(); // 首屏绘制
    cycleDraw(); // 循环绘制
  }
});
