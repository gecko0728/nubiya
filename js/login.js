
// 2. 获取元素
let uname = document.querySelector('#username')
let upass = document.querySelector('#password')


// 1-2. 绑定事件
form.addEventListener('submit', e => {
  // 1-3. 取消默认事件
  // 处理事件对象兼容
  e = e || window.event
  // 取消默认事件
  e.preventDefault()

  // 2-2. 获取用户输入的内容
  let username = uname.value
  let password = upass.value

  // 2-3. 表单验证
  if (username === '' || password === '') {
    alert('请完整填写表单')
    return
  }

  // 2-4. 发送请求
  //      直接使用我们封装好的 ajax 方法
  ajax({
    url: '../ipa/user/login.php',
    type: 'POST',
    data: `username=${ username }&password=${ password }`,
    dataType: 'json',
    success: function (res) {
      // res => 后端返回的结果
      // console.log(res)

      // 3. 根据后端的响应最对应的操作
      if (res.code === 1) {
        // 登录成功
        // 设置一个登录过的标识符
        setcookie('token', 1, 30000)
        setcookie('userId', res.userId, 30000)

        // 跳转到首页
        window.location.href = './index.html'
      } else {
        // 登录失败
        // 显示用户名或密码错误
        errText.className = 'active'
      }
    }
  })
})
