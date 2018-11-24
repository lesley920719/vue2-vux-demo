/**
 * ul>li 结构事件代理封装
 *  在ul上绑定@click="clickHandler"事件。
 * clickHandler (evt) {
 *      const data = clickProxy(evt); 
 *   }
 * @method
 * @param {Event} 传入event
 * @return {Object} 返回li标签的dataset对象
 */

export default function clickProxy(evt) {
    let node = evt.target || evt;
    if (node.nodeName.toUpperCase() == "UL") {
      return false
    } else if (node.nodeName.toUpperCase() === 'LI') {
      return node.dataset;
    } else {
      return clickProxy(node.parentNode);
    }
}
  