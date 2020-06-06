
function ajax(options) {
  // 1. 判断参数类型
  // 1-1. 判断 url 必填
  if (!options.url) throw new Error('url 为必填选项')

  // 1-2. 判断请求方式
  if (!(options.type === undefined || /^(get|post)$/i.test(options.type))) throw new Error('type 目前只接受 GET 和 POST 方式')

  // 1-3. 判断是否异步
  if (!(options.async === undefined || typeof(options.async) === 'boolean')) throw new Error('async 只能接受布尔值')

  // 1-4. 判断携带参数
  if (!(options.data === undefined || /^(.+=.+&{0,1})*$/.test(options.data))) throw new Error('data 必须符合 "key=value&key2=value2" 的数据格式')

  // 1-5. 判断是否解析
  if (!(options.dataType === undefined || /^(string|json)$/i.test(options.dataType))) throw new Error('dataType 目前只接受 string 和 json 参数')

  // 1-6. 判断回调函数
  if (!(options.success === undefined || typeof(options.success) === 'function')) throw new Error('success 必须是一个 function 数据类型')


  // 2. 准备一套默认值
  let _default = {
    url: options.url,
    type: options.type || 'GET',
    async: options.async === undefined ? true : options.async,
    data: options.data || '',
    dataType: options.dataType || 'string',
    success: options.success || function () { /* 一个默认值函数 */ }
  }

  // 3. 发送 ajax 请求
  // 3-1. 创建一个 ajax 对象
  let xhr = null
  if (XMLHttpRequest) {
    xhr = new XMLHttpRequest()
  } else {
    xhr = new ActiveXObject('Microsoft.XMLHTTP')
  }

  // 3-2. 配置请求信息
  if (/^get$/i.test(_default.type) && _default.data) {
    _default.url = _default.url + '?' + _default.data
  }
  xhr.open(_default.type, _default.url, _default.async)

  // 3-3. 先绑定事件
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && /^2\d{2}$/.test(xhr.status)) {
      if (_default.dataType === 'string') _default.success(xhr.responseText)

      if (_default.dataType === 'json') _default.success(JSON.parse(xhr.responseText))
    }
  }

  // 3-4. 发送请求
  if (/^post$/i.test(_default.type)) {
    xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded')
    xhr.send(_default.data)
  } else {
    xhr.send()
  }
}
