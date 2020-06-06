
let form = document.querySelector('form')

// 2. 获取元素
let uname = document.querySelector('.username')
let upass = document.querySelector('.password')

form.addEventListener('submit', e => {
    // 1-3. 取消默认事件
    e = e || window.event
    e.preventDefault()
  
    // 2-2. 获取用户输入的内容
    let username = userInput.value
    let password = pwdInput.value
   
  
    // 2-3. 非空验证
    if (username === '' || password === '') {
      alert('请完整填写表单数据')
      return
    }
  
    // 3. 发送请求
    // 提前准备好参数字符串
    let dataStr = `username=${ username }&password=${ password }`
  
    // 使用 ajax 方法
    ajax({
      url: './api/user/register.php',
      type: 'POST',
      data: dataStr,
      dataType: 'json',
      success: function (res) {
        // res => 后端返回的数据
        // console.log(res)
        if (res.code === 1) {
         
          window.location.href = './login.html'
        } else {
     
          errText.className = 'active'
        }
  
      }
    })
  })
