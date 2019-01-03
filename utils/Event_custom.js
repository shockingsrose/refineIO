class Event {
  // 监听事件
  on(eventName, fn) {
    if (typeof fn !== 'function') {
      return;
    }
    this[eventName] = this[eventName] || [];
    this[eventName].push(fn);
  }

  // 发射事件
  emit(eventName, ...args) {
    this[eventName] = this[eventName] || [];

    this[eventName].forEach((fn) => {
      fn.call(this, args);
    });
  }

  // 移除事件
  off() {}
}

const event = new Event();

setTimeout(() => {
  event.emit('change', [2, 3]);
  event.emit('change', [3, 4]);
}, 1000);

event.on('change', (e) => {
  console.log(e); //[2,3] [3,4]
});
