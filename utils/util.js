/* 设置页面标题*/
export const setTitle = function(title, timer) {
  title = title ? title : '全国中小企业融资综合信用服务平台';
  timer = setInterval(() => {
    if (process.browser) {
      clearInterval(timer);
      window.document.title = title;
    }
  }, 100);

}

/* 合法uri*/
export function validateURL(textval) {
  const urlregex =
    /^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/
  return urlregex.test(textval)
}

/* 小写字母*/
export function validateLowerCase(str) {
  const reg = /^[a-z]+$/
  return reg.test(str)
}

/* 大写字母*/
export function validateUpperCase(str) {
  const reg = /^[A-Z]+$/
  return reg.test(str)
}

/* 大小写字母*/
export function validatAlphabets(str) {
  const reg = /^[A-Za-z]+$/
  return reg.test(str)
}

/**
 * validate email
 * @param email
 * @returns {boolean}
 */
export function validateEmail(email) {
  const re = /^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/
  return re.test(email)
}

/**
 * 判断身份证号码
 */
export function validateCard(code) {
  if (!/(^\d{15}$)|(^\d{17}([0-9]|X)$)/.test(code)) {
    return false;
  }
  return true;
}

/**
 * 判断固话是否正确
 */
export function validateMobile(phone) {

  if (!/^(\(\d{3,4}\)|\d{3,4}-|\s)?\d{7,14}$/.test(phone)) {
    return false;
  }
  return true;
}

/**
 * 判断手机号码是否正确
 */
export function validatePhone(mobile) {
  if (!(/^1[3456789]\d{9}$/.test(mobile))) {
    return false;
  }
  return true;
}

/**
 * 判断ipv4
 */
export function validateIpv4(mobile) {
  let regName = /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
  if (!(regName.test(mobile))) {
    return false;
  }
  return true;
}

/**
 * 判断是否为整数
 */
export function validateNumber(num, type) {
  // debugger;
  let regName = /[^\d.]/g;
  if (type == 1) {
    if (!regName.test(num)) return false;
  } else if (type == 2) {
    regName = /[^\d]/g;
    if (!regName.test(num)) return false;
  } else if (type == 3) {
    regName = /^(\+?[1-9][0-9]*)$/
    if (!regName.test(num)) return false;
  }
  return true;
};

/**
 * 输入大于0的两位小鼠
 */

export function validateFixed2(num, type) {
  let regName = /^(([1-9]\d+)|[0-9])(\.\d{0,2})?$/;
  if (!regName.test(num)) return false;
  return true;
};


/**
 * 判断是否为小数
 */
export function validateDecimal(num, type) {
  let regName = /[^\d.]/g;
  if (type == 1) {
    if (!regName.test(num)) return false;
  } else if (type == 2) {
    regName = /[^\d.]/g;
    if (!regName.test(num)) return false;
  }
  return true;
};

/**
 * 判断是否为空
 */
export function validateNull(val) {
  if (typeof val == 'boolean') {
    return false;
  }
  if (val instanceof Array) {
    if (val.length == 0) return true;
  } else if (val instanceof Object) {
    if (JSON.stringify(val) === '{}') return true;
  } else {
    if (val == 'null' || val == null || val == 'undefined' || val == undefined || val == '') return true;
    return false;
  }
  return false;
};

// 验证密码
export function validatePassword(password) {
  // let regName = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[^]{8,16}$/;
  let regName =
    /^(?![A-Za-z]+$)(?![A-Z0-9]+$)(?![a-z0-9]+$)(?![a-z\\W]+$)(?![A-Z\\W]+$)(?![0-9\\W]+$)[a-zA-Z0-9\\W].{7,20}$/
  if (!(regName.test(password))) {
    return false;
  }
  return true;
}

export function validateChinese(text) {
  // debugger;
  let regName = /^[\u0391-\uFFE5]+$/;
  if (!(regName.test(text))) {
    return false;
  };
  return true;
}

export function chargeIsHave(arr) {
  if (Array.isArray(arr)) {
    let flag = false;
    arr.forEach(item => {
      if (item.keyName == '不限') {
        flag = true;
      }
    })
    if (!flag) {
      arr.unshift({
        keyName: '不限',
        keyValue: '0'
      })
    }
  }
  return arr
}

export function rsaData(data) {
  if (process.browser) {
    // debugger;
    const JSEncrypt = require("jsencrypt");
    // console.log(JSEncrypt);
    // return;
    const PUBLIC_KEY =
      "MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQC1cynI/ZMeh7PhJM+ESepzDY58phYtGa3xSnl7HXNyp5Qd7+V+JhWCpPCBzTU7/MlqTjXy4cKHW8YS5p3jvlGmTFC0MIoslKKl8wsS+tRr7w+k06yLqmd3xE+EZxCLozYsRlIT+rJC14VxmpyxBM+nJPRhfyVHk0xuCM4yJYhtKwIDAQAB";
    let jsencrypt = new JSEncrypt.JSEncrypt();
    // console.log(jsencrypt);
    jsencrypt.setPublicKey(PUBLIC_KEY);
    const result = jsencrypt.encrypt(data);
    return result;
  }
}



export function dateFormat(fmt, date) {
  let ret;
  const opt = {
    "Y+": date.getFullYear().toString(), // 年
    "m+": (date.getMonth() + 1).toString(), // 月
    "d+": date.getDate().toString(), // 日
    "H+": date.getHours().toString(), // 时
    "M+": date.getMinutes().toString(), // 分
    "S+": date.getSeconds().toString() // 秒
    // 有其他格式化字符需求可以继续添加，必须转化成字符串
  };
  for (let k in opt) {
    ret = new RegExp("(" + k + ")").exec(fmt);
    if (ret) {
      fmt = fmt.replace(ret[1], (ret[1].length == 1) ? (opt[k]) : (opt[k].padStart(ret[1].length, "0")))
    };
  };
  return fmt;
}
