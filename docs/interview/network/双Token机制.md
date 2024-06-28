# 双Token 机制

## 什么是双Token 机制

双Token 包括 
- `access_token`  用户获取数据权限
- `refresh_token` 用来获取新的access_token

双 token 验证机制，其中access_token过期时间较短，refresh_token 过期时间较长。当 access_token 过期后，使用 refresh_token 去请求新的 token。

## 为什么需要双Token

Access Token 的短期有效性意味着客户端不需要频繁地进行认证，减少了登录验证的次数，提高了用户的使用体验。

只有一个access_token时，因为access_token需要频繁地通过网络请求来进行用户鉴权，所以容易被获取到。这时如果有效期设置得太长，那么access_token被冒用的可能性很大，存在危险。

refresh_token一般长期保存在本地，只会在请求新token的和返回新token的报文中出现，网络中出现的概率低，被获取的概率也就比较低，所以有效期可以设置长一点。