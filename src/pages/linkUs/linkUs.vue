<template>
  <div class="link">
    <div class="swiperBox">
      <swiper :auto="true" :loop="true" :aspect-ratio="320/750" height="2.9rem" dots-position="center" dots-class="homedots">
        <swiper-item v-for="(item, index) in sliderList" :key="index">
          <div style="width:100%;height:100%;touch-action: none;">
            <img :src="item.advertImage" width="100%">
          </div>
        </swiper-item>
      </swiper>
    </div>
    <div class="link_box">
      <ul class="link_tab flex flex_justify">
        <li :class="{'activeColor':contactType==0}">
          深圳总部
          <span></span>
        </li>
        <li :class="{'activeColor':contactType==1}">
          办事处
          <span></span>
        </li>
        <li :class="{'activeColor':contactType==2}">
          招商入驻
          <span></span>
        </li>
      </ul>
      <div class="swiper-pagination"></div>
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="headquarters swiper-slide">
            <div class="headquarters_info">
              <div class="headquarters_flex">
                <div class="headquarters_flex_left headquarters_phone"></div>
                <div class="headquarters_flex_right">
                  <p><a href="tel:0755-86312313">0755-86312313 (前台)</a> <span></span></p>
                  <p><a href="tel:0755-86312316">0755-86312316 (人力资源)</a> <span></span></p>
                </div>
              </div>
              <div class="headquarters_flex">
                <div class="headquarters_flex_left headquarters_email"></div>
                <div class="headquarters_flex_right">
                  <p><a href="mailto:hr@vpclub.cn">hr@vpclub.cn</a> <span></span></p>
                </div>
              </div>
              <div class="headquarters_flex">
                <div class="headquarters_flex_left headquarters_website"></div>
                <div class="headquarters_flex_right">
                  <p><a href="http://www.vphonor.com">www.vphonor.com</a><span></span></p>
                </div>
              </div>
              <div class="headquarters_flex">
                <div class="headquarters_flex_left headquarters_addr"></div>
                <div class="headquarters_flex_right">
                  <p><a href="https://j.map.baidu.com/-aBb2">深圳市南山区科技园金融基地2栋9楼CD</a><span></span></p>
                </div>
              </div>
            </div>
            <baidu-map id="baiduMap" ak="fugbGzfq0TYLSBVfYDGHcLyQ7svSHi05" :center="center" :zoom="zoom" :scroll-wheel-zoom="true">
              <bm-marker :position="center">
                <bm-label content="科技园·金融基地2栋" :position="center" :labelStyle="{color: 'red', fontSize : '10px', border: 0}" :offset="{width: 20, height: 0}" title="科技园·金融基地2栋"/>
              </bm-marker>
            </baidu-map>
          </div>
          <div class="office swiper-slide">
            <div class="office_content">
              <div class="office_location flex">
                <i></i>
                <p>黑龙江省 哈尔滨</p>
              </div>
              <div class="office_contact flex flex_justify">
                <div class="office_contact_left">办事处经理 ：</div>
                <div class="office_contact_right">佟欢</div>
              </div>
              <div class="office_contact flex flex_justify">
                <div class="office_contact_left">联 系 电 话 ：</div>
                <div class="office_contact_right">13936675399</div>
              </div>
              <div class="office_contact flex flex_justify">
                <div class="office_contact_left">邮&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;箱 ：</div>
                <div class="office_contact_right">tong.huan@vpclub.cn</div>
              </div>
              <div class="office_contact flex flex_justify">
                <div class="office_contact_left">地&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;址 ：</div>
                <div class="office_contact_right clear_margin">
                  <p>哈尔滨市南岗区长江路179号金源</p>
                  <p>金祥座20层D栋2004室</p>
                </div>
              </div>
            </div>
            <div class="office_content">
              <div class="office_location flex">
                <i></i>
                <p>吉林省 长春</p>
              </div>
              <div class="office_contact flex flex_justify">
                <div class="office_contact_left">办事处经理 ：</div>
                <div class="office_contact_right">佟欢</div>
              </div>
              <div class="office_contact flex flex_justify">
                <div class="office_contact_left">联 系 电 话 ：</div>
                <div class="office_contact_right">13936675399</div>
              </div>
              <div class="office_contact flex flex_justify">
                <div class="office_contact_left">邮&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;箱 ：</div>
                <div class="office_contact_right">tong.huan@vpclub.cn</div>
              </div>
            </div>
            <div class="office_content">
              <div class="office_location flex">
                <i></i>
                <p>辽宁省 沈阳</p>
              </div>
              <div class="office_contact flex flex_justify">
                <div class="office_contact_left">办事处经理 ：</div>
                <div class="office_contact_right">佟欢</div>
              </div>
              <div class="office_contact flex flex_justify">
                <div class="office_contact_left">联 系 电 话 ：</div>
                <div class="office_contact_right">13936675399</div>
              </div>
              <div class="office_contact flex flex_justify">
                <div class="office_contact_left">邮&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;箱 ：</div>
                <div class="office_contact_right">tong.huan@vpclub.cn</div>
              </div>
            </div>
            <div class="office_content">
              <div class="office_location flex">
                <i></i>
                <p>内蒙古</p>
              </div>
              <div class="office_contact flex flex_justify">
                <div class="office_contact_left">办事处经理 ：</div>
                <div class="office_contact_right">张玮</div>
              </div>
              <div class="office_contact flex flex_justify">
                <div class="office_contact_left">联 系 电 话 ：</div>
                <div class="office_contact_right">18991189819</div>
              </div>
              <div class="office_contact flex flex_justify">
                <div class="office_contact_left">邮&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;箱 ：</div>
                <div class="office_contact_right">zhang.wei@vpclub.cn</div>
              </div>
            </div>
            <div class="office_content">
              <div class="office_location flex">
                <i></i>
                <p>河北省 石家庄</p>
              </div>
              <div class="office_contact flex flex_justify">
                <div class="office_contact_left">办事处经理 ：</div>
                <div class="office_contact_right">柯强</div>
              </div>
              <div class="office_contact flex flex_justify">
                <div class="office_contact_left">联 系 电 话 ：</div>
                <div class="office_contact_right">18631122535</div>
              </div>
              <div class="office_contact flex flex_justify">
                <div class="office_contact_left">邮&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;箱 ：</div>
                <div class="office_contact_right">ke.qiang@vpclub.cn</div>
              </div>
              <div class="office_contact flex flex_justify">
                <div class="office_contact_left">地&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;址 ：</div>
                <div class="office_contact_right clear_margin">
                  <p>石家庄市裕华区祁连街</p>
                  <p>盛和广场E1-404-2室</p>
                </div>
              </div>
            </div>
            <div class="office_content">
              <div class="office_location flex">
                <i></i>
                <p>宁夏</p>
              </div>
              <div class="office_contact flex flex_justify">
                <div class="office_contact_left">办事处经理 ：</div>
                <div class="office_contact_right">张玮</div>
              </div>
              <div class="office_contact flex flex_justify">
                <div class="office_contact_left">联 系 电 话 ：</div>
                <div class="office_contact_right">18991189819</div>
              </div>
              <div class="office_contact flex flex_justify">
                <div class="office_contact_left">邮&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;箱 ：</div>
                <div class="office_contact_right">zhang.wei@vpclub.cn</div>
              </div>
            </div>
            <div class="office_content">
              <div class="office_location flex">
                <i></i>
                <p>山东省 济南</p>
              </div>
              <div class="office_contact flex flex_justify">
                <div class="office_contact_left">办事处经理 ：</div>
                <div class="office_contact_right">吕显滕</div>
              </div>
              <div class="office_contact flex flex_justify">
                <div class="office_contact_left">联 系 电 话 ：</div>
                <div class="office_contact_right">15053351678</div>
              </div>
              <div class="office_contact flex flex_justify">
                <div class="office_contact_left">邮&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;箱 ：</div>
                <div class="office_contact_right">lv.xianteng@vpclub.cn</div>
              </div>
              <div class="office_contact flex flex_justify">
                <div class="office_contact_left">地&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;址 ：</div>
                <div class="office_contact_right clear_margin">
                  <p>山东省济南市市中区纬二路84号</p>
                  <p>德亨大厦</p>
                </div>
              </div>
            </div>
            <div class="office_content">
              <div class="office_location flex">
                <i></i>
                <p>陕西省 西安</p>
              </div>
              <div class="office_contact flex flex_justify">
                <div class="office_contact_left">办事处经理 ：</div>
                <div class="office_contact_right">张玮</div>
              </div>
              <div class="office_contact flex flex_justify">
                <div class="office_contact_left">联 系 电 话 ：</div>
                <div class="office_contact_right">18991189819</div>
              </div>
              <div class="office_contact flex flex_justify">
                <div class="office_contact_left">邮&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;箱 ：</div>
                <div class="office_contact_right">zhang.wei@vpclub.cn</div>
              </div>
              <div class="office_contact flex flex_justify">
                <div class="office_contact_left">地&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;址 ：</div>
                <div class="office_contact_right clear_margin">
                  <p>陕西省西安市雁塔区绿地世纪城</p>
                  <p>新里仕嘉公寓A区4栋</p>
                </div>
              </div>
            </div>
            <div class="office_content">
              <div class="office_location flex">
                <i></i>
                <p>河南省 郑州</p>
              </div>
              <div class="office_contact flex flex_justify">
                <div class="office_contact_left">办事处经理 ：</div>
                <div class="office_contact_right">陈鸽</div>
              </div>
              <div class="office_contact flex flex_justify">
                <div class="office_contact_left">联 系 电 话 ：</div>
                <div class="office_contact_right">13592502095</div>
              </div>
              <div class="office_contact flex flex_justify">
                <div class="office_contact_left">邮&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;箱 ：</div>
                <div class="office_contact_right">chen.ge@vpclub.cn</div>
              </div>
              <div class="office_contact flex flex_justify">
                <div class="office_contact_left">地&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;址 ：</div>
                <div class="office_contact_right clear_margin">
                  <p>河南省郑州市金水区凤鸣路与英协路交叉口</p>
                  <p>中国移动</p>
                </div>
              </div>
            </div>
            <div class="office_content">
              <div class="office_location flex">
                <i></i>
                <p>安徽省 合肥</p>
              </div>
              <div class="office_contact flex flex_justify">
                <div class="office_contact_left">办事处经理 ：</div>
                <div class="office_contact_right">胡斌</div>
              </div>
              <div class="office_contact flex flex_justify">
                <div class="office_contact_left">联 系 电 话 ：</div>
                <div class="office_contact_right">18455179539</div>
              </div>
              <div class="office_contact flex flex_justify">
                <div class="office_contact_left">邮&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;箱 ：</div>
                <div class="office_contact_right">hu.bin@vpclub.cn</div>
              </div>
              <div class="office_contact flex flex_justify">
                <div class="office_contact_left">地&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;址 ：</div>
                <div class="office_contact_right clear_margin">
                  <p>安徽省合肥蜀山区望江西路65号</p>
                  <p>印象西湖</p>
                </div>
              </div>
            </div>
            <div class="office_content">
              <div class="office_location flex">
                <i></i>
                <p>上海市 浦东新区</p>
              </div>
              <div class="office_contact flex flex_justify">
                <div class="office_contact_left">办事处经理 ：</div>
                <div class="office_contact_right">徐磊</div>
              </div>
              <div class="office_contact flex flex_justify">
                <div class="office_contact_left">联 系 电 话 ：</div>
                <div class="office_contact_right">13816800926</div>
              </div>
              <div class="office_contact flex flex_justify">
                <div class="office_contact_left">邮&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;箱 ：</div>
                <div class="office_contact_right">xu.lei@vpclub.cn</div>
              </div>
              <div class="office_contact flex flex_justify">
                <div class="office_contact_left">地&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;址 ：</div>
                <div class="office_contact_right clear_margin">
                  <p>上海市浦东新区祖冲之路2201</p>
                  <p>栋6号楼601</p>
                </div>
              </div>
            </div>
            <div class="office_content">
              <div class="office_location flex">
                <i></i>
                <p>重庆市 渝北区</p>
              </div>
              <div class="office_contact flex flex_justify">
                <div class="office_contact_left">办事处经理 ：</div>
                <div class="office_contact_right">黄晓</div>
              </div>
              <div class="office_contact flex flex_justify">
                <div class="office_contact_left">联 系 电 话 ：</div>
                <div class="office_contact_right">13983459910</div>
              </div>
              <div class="office_contact flex flex_justify">
                <div class="office_contact_left">邮&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;箱 ：</div>
                <div class="office_contact_right">huang.xiao@vpclub.cn</div>
              </div>
              <div class="office_contact flex flex_justify">
                <div class="office_contact_left">地&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;址 ：</div>
                <div class="office_contact_right clear_margin">
                  <p>重庆市渝北区星光三路4号重庆移动</p>
                  <p>2号楼5楼</p>
                </div>
              </div>
            </div>
            <div class="office_content">
              <div class="office_location flex">
                <i></i>
                <p>四川省 成都</p>
              </div>
              <div class="office_contact flex flex_justify">
                <div class="office_contact_left">办事处经理 ：</div>
                <div class="office_contact_right">王清华</div>
              </div>
              <div class="office_contact flex flex_justify">
                <div class="office_contact_left">联 系 电 话 ：</div>
                <div class="office_contact_right">13816273069</div>
              </div>
              <div class="office_contact flex flex_justify">
                <div class="office_contact_left">邮&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;箱 ：</div>
                <div class="office_contact_right">wang.qinghua@vpclub.cn</div>
              </div>
              <div class="office_contact flex flex_justify">
                <div class="office_contact_left">地&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;址 ：</div>
                <div class="office_contact_right clear_margin">四川省成都市武侯区高升桥成都A区</div>
              </div>
            </div>
            <div class="office_content">
              <div class="office_location flex">
                <i></i>
                <p>浙江省 杭州</p>
              </div>
              <div class="office_contact flex flex_justify">
                <div class="office_contact_left">办事处经理 ：</div>
                <div class="office_contact_right">李洁薇</div>
              </div>
              <div class="office_contact flex flex_justify">
                <div class="office_contact_left">联 系 电 话 ：</div>
                <div class="office_contact_right">13396565251</div>
              </div>
              <div class="office_contact flex flex_justify">
                <div class="office_contact_left">邮&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;箱 ：</div>
                <div class="office_contact_right">li.jiewei@vpclub.cn</div>
              </div>
              <div class="office_contact flex flex_justify">
                <div class="office_contact_left">地&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;址 ：</div>
                <div class="office_contact_right clear_margin">
                  <p>浙江省杭州市上城区近江东路34号</p>
                  <p>天福花园6-3-602</p>
                </div>
              </div>
            </div>
            <div class="office_content">
              <div class="office_location flex">
                <i></i>
                <p>湖南省 长沙</p>
              </div>
              <div class="office_contact flex flex_justify">
                <div class="office_contact_left">办事处经理 ：</div>
                <div class="office_contact_right">丁凯</div>
              </div>
              <div class="office_contact flex flex_justify">
                <div class="office_contact_left">联 系 电 话 ：</div>
                <div class="office_contact_right">13308406060</div>
              </div>
              <div class="office_contact flex flex_justify">
                <div class="office_contact_left">邮&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;箱 ：</div>
                <div class="office_contact_right">ding.kai@vpclub.cn</div>
              </div>
              <div class="office_contact flex flex_justify">
                <div class="office_contact_left">地&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;址 ：</div>
                <div class="office_contact_right clear_margin">
                  <p>湖南省长沙市赤岭路82号湘银嘉园6栋</p>
                  <p>3单元306</p>
                </div>
              </div>
            </div>
            <div class="office_content">
              <div class="office_location flex">
                <i></i>
                <p>贵州省 贵阳</p>
              </div>
              <div class="office_contact flex flex_justify">
                <div class="office_contact_left">办事处经理 ：</div>
                <div class="office_contact_right">胡斌</div>
              </div>
              <div class="office_contact flex flex_justify">
                <div class="office_contact_left">联 系 电 话 ：</div>
                <div class="office_contact_right">18455179539</div>
              </div>
              <div class="office_contact flex flex_justify">
                <div class="office_contact_left">邮&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;箱 ：</div>
                <div class="office_contact_right">hu.bin@vpclub.cn</div>
              </div>
              <div class="office_contact flex flex_justify">
                <div class="office_contact_left">地&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;址 ：</div>
                <div class="office_contact_right clear_margin">
                  <p>贵州省贵阳市观山湖区碧海南路</p>
                  <p>绿地联盛四栋2303A</p>
                </div>
              </div>
            </div>
            <div class="office_content">
              <div class="office_location flex">
                <i></i>
                <p>云南省 昆明</p>
              </div>
              <div class="office_contact flex flex_justify">
                <div class="office_contact_left">办事处经理 ：</div>
                <div class="office_contact_right">蒋斌</div>
              </div>
              <div class="office_contact flex flex_justify">
                <div class="office_contact_left">联 系 电 话 ：</div>
                <div class="office_contact_right">13759584607</div>
              </div>
              <div class="office_contact flex flex_justify">
                <div class="office_contact_left">邮&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;箱 ：</div>
                <div class="office_contact_right">jiang.bin@vpclub.cn</div>
              </div>
              <div class="office_contact flex flex_justify">
                <div class="office_contact_left">地&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;址 ：</div>
                <div class="office_contact_right clear_margin">云南省昆明市官渡区东二环路517号</div>
              </div>
            </div>
            <div class="office_content">
              <div class="office_location flex">
                <i></i>
                <p>广西省 南宁</p>
              </div>
              <div class="office_contact flex flex_justify">
                <div class="office_contact_left">办事处经理 ：</div>
                <div class="office_contact_right">李薇薇</div>
              </div>
              <div class="office_contact flex flex_justify">
                <div class="office_contact_left">联 系 电 话 ：</div>
                <div class="office_contact_right">15077155606</div>
              </div>
              <div class="office_contact flex flex_justify">
                <div class="office_contact_left">邮&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;箱 ：</div>
                <div class="office_contact_right">li.weiwei@vpclub.cn</div>
              </div>
              <div class="office_contact flex flex_justify">
                <div class="office_contact_left">地&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;址 ：</div>
                <div class="office_contact_right clear_margin">
                  <p>广西省南宁市青秀区金湖路民族大道</p>
                  <p>115号金碧苑C栋4楼</p>
                </div>
              </div>
            </div>
            <div class="office_content">
              <div class="office_location flex">
                <i></i>
                <p>广东省 广州</p>
              </div>
              <div class="office_contact flex flex_justify">
                <div class="office_contact_left">办事处经理 ：</div>
                <div class="office_contact_right">田赟</div>
              </div>
              <div class="office_contact flex flex_justify">
                <div class="office_contact_left">联 系 电 话 ：</div>
                <div class="office_contact_right">13917663319</div>
              </div>
              <div class="office_contact flex flex_justify">
                <div class="office_contact_left">邮&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;箱 ：</div>
                <div class="office_contact_right">tian.yun@vpclub.cn</div>
              </div>
              <div class="office_contact flex flex_justify">
                <div class="office_contact_left">地&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;址 ：</div>
                <div class="office_contact_right clear_margin">
                  <p>广东省广州市天河区珠江新城珠江西路</p>
                  <p>11号广东全球通大厦5楼-1309</p>
                </div>
              </div>
            </div>
            <div class="office_content">
              <div class="office_location flex">
                <i></i>
                <p>中国 香港</p>
              </div>
              <div class="office_contact flex flex_justify">
                <div class="office_contact_left">办事处经理 ：</div>
                <div class="office_contact_right">胡小军</div>
              </div>
              <div class="office_contact flex flex_justify">
                <div class="office_contact_left">联 系 电 话 ：</div>
                <div class="office_contact_right">13641445627</div>
              </div>
              <div class="office_contact flex flex_justify">
                <div class="office_contact_left">邮&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;箱 ：</div>
                <div class="office_contact_right">hu.xiaojun@vpclub.cn</div>
              </div>
            </div>
          </div>
          <div class="business swiper-slide">
            <div class="business_box flex flex_justify flex_align_center">
              <div class="business_box_left">
                <span class="icon_xqj"></span>
                <p>寻秦集</p>
              </div>
              <div class="business_box_right">
                <div class="business_box_intro flex flex_justify">
                  <div>招商经理 : </div>
                  <div>张经理</div>
                </div>
                <div class="business_box_intro flex flex_justify">
                  <div>联系电话 : </div>
                  <div>15766262003</div>
                </div>
                <div class="business_box_intro flex flex_justify">
                  <div>邮&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;箱 : </div>
                  <div>zhang.xin@vpclub.cn</div>
                </div>
                <div class="business_box_intro flex flex_justify">
                  <div>Q&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Q : </div>
                  <div>273429189</div>
                </div>
              </div>
            </div>
            <div class="business_box flex flex_justify flex_align_center">
              <div class="business_box_left">
                <span class="icon_lnyp"></span>
                <p>岭南优品</p>
              </div>
              <div class="business_box_right">
                <div class="business_box_intro flex flex_justify">
                  <div>招商经理 : </div>
                  <div>田经理</div>
                </div>
                <div class="business_box_intro flex flex_justify">
                  <div>联系电话 : </div>
                  <div>13917663319</div>
                </div>
                <div class="business_box_intro flex flex_justify">
                  <div>邮&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;箱 : </div>
                  <div>tian.yun@vpclub.cn</div>
                </div>
                <!-- <div class="business_box_intro flex flex_justify">
                  <div>Q&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Q : </div>
                  <div>13632575566</div>
                </div> -->
                <div class="business_box_intro flex flex_justify special_css">
                  <div>招商经理 : </div>
                  <div>宋珊珊</div>
                </div>
                <div class="business_box_intro flex flex_justify">
                  <div>联系电话 : </div>
                  <div>18520346630</div>
                </div>
                <div class="business_box_intro flex flex_justify">
                  <div>邮&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;箱 : </div>
                  <div>song.shanshan@vpclub.cn</div>
                </div>
                <div class="business_box_intro flex flex_justify">
                  <div>Q&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Q : </div>
                  <div>18520346630</div>
                </div>
              </div>
            </div>
            <div class="business_box flex flex_justify flex_align_center">
              <div class="business_box_left">
                <span class="icon_hxb"></span>
                <p>和小宝</p>
              </div>
              <div class="business_box_right">
                <div class="business_box_intro flex flex_justify">
                  <div>招商经理 : </div>
                  <div>王清华</div>
                </div>
                <div class="business_box_intro flex flex_justify">
                  <div>联系电话 : </div>
                  <div>13816273069</div>
                </div>
                <div class="business_box_intro flex flex_justify">
                  <div>邮&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;箱 : </div>
                  <div>wang.qinghua@vpclub.cn</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import BaiduMap from 'vue-baidu-map/components/map/Map.vue'
import bmLabel from 'vue-baidu-map/components/overlays/Label.vue'
import bmMarker from 'vue-baidu-map/components/overlays/Marker.vue'
import SwiperSlide from 'swiper'
import {
  Swiper,
  SwiperItem,
} from "vux";

export default {
  components: {
    Swiper,
    SwiperItem,
    BaiduMap,
    bmLabel,
    bmMarker,
  },
  name: 'linkUs',
  data () {
    return {
      sliderList: [
        {advertImage:"./static/images/banner/contact_banner_1@2x.png"},
        {advertImage:"./static/images/banner/contact_banner_2@2x.png"},
        {advertImage:"./static/images/banner/contact_banner_3@2x.png"},
      ],
      contactType: '0', // 初始显示tab
      center: {lng: "113.952579",lat: "22.550263"}, // 经纬度
      zoom: 15, // 缩放等级
    }
  },
  mounted() {
    //tab导航
    let _this = this;
      new SwiperSlide('.link_box .swiper-container', {
        autoHeight: true, //高度随内容变化
        pagination: { //分页器
          el: '.link_box .swiper-pagination', //分页器容器的css选择器或HTML标签，不同Swiper的组件应该有所区分
          clickable : true,  //点击分页器的指示点分页器会控制Swiper切换。
        },
        speed : 500,
        on: {
          slideChangeTransitionStart: function(){ //从当前slide开始过渡到另一个slide时执行的回调函数
            // $(".link_tab .activeColor").removeClass('activeColor');
            // $(".link_tab li").eq(this.activeIndex).addClass('activeColor');
            console.log(this.activeIndex);
            _this.contactType = this.activeIndex
          },
        },
      });
  },
  created() {
    
  },
  methods: {
    
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
@import '../../assets/less/swiper.min.css'; //main.js引入时报错：Module not found: Error: Can't resolve 'swiper/dist/css/swiper.min.css' （样式文件放入静态文件夹引入）
@import '../../assets/less/mixin.less';
@import '../../assets/less/theme.less';
.content {padding-bottom: 0!important}
.link{
  .link_box {
    position: relative;
    .link_tab {
      li {
        position: relative;
        flex: 1;
        text-align: center;
        height: 1rem;
        line-height: 1rem;
        font-size: 14px;
        color: @theme-secondary;
        span {
          position: absolute;
          bottom: 0;
          left: 50%;
          margin-left: -0.21rem;
          display: block;
          width: .42rem;
          height: .06rem;
          background: transparent;
        }
      }
      li.activeColor {
        color: @theme-black;
        span {
          background: @theme-red;
        }
      }
    }
    .swiper-pagination {
      width: 100%; height: 1rem; position: absolute; left: 0; top: 0; z-index: 2;
      .swiper-pagination-bullet {
        background: none; width: 33.33%; height: 1rem; display: inline-block; 
      }
      .swiper-pagination-bullet-active { background: none; }
    }
    .swiper-container {
      .swiper-wrapper {
        .swiper-slide{
          height: auto;
          display: inline-block;
        }
      }
    }
    .headquarters {
      #baiduMap {
        width: 6.58rem;
        height: 3.92rem;
        margin: 0 auto;
      }
      .headquarters_info {
        width: 6.58rem;
        margin: .5rem auto;
        .headquarters_flex {
        display: flex;
        .headquarters_flex_left {
          margin: .16rem .2rem 0 0;
          width: .32rem;
          height: .32rem;
          background-size: 100%;
        }
        .headquarters_phone{
          .bg-img(us_phone);
        }
        .headquarters_email{
          .bg-img(us_email);
        }
        .headquarters_website{
          .bg-img(us_earth);
        }
        .headquarters_addr{
          .bg-img(us_location);
        }
        .headquarters_flex_right {
          font-size: 14px;
          color: @theme;
          p {
            height: .66rem;
            line-height: .66rem;
            display: flex;
            align-items: center;
            a {
              color: @theme-black;
            }
            span {
              display: inline-block;
              height: 0.28rem;
              width: 0.28rem;
              margin-left: .1rem;
              background-size: 100%;
              .bg-img(case_enter);
            }
          }
          
        }
      }
      }
    }
    .office {
      margin-bottom: .3rem;
      .office_content {
        width: 6.8rem;
        margin: 0 auto;
        padding: .3rem 0;
        border-bottom: 1px solid #eee;
        .office_location {
          i {
            display: block;
            width: .22rem;
            height: .22rem;
            .bg-img(introduce_loacation);
            background-size: 100%;
            margin: .17rem .12rem 0 0;
          }
          p {
            font-size: 14px;
            line-height: .6rem;
            height: .6rem;
            color: @theme-black;
          }
        }
        .office_contact {
          line-height: .5rem;
          margin:0 .34rem;
          .office_contact_left {
            color: @theme-secondary;
          }
          .office_contact_right {
            line-height: .5rem;
            color: @theme-black;
            p {
              margin-top:.15rem;
              text-align:right;
              line-height: .3rem;
            }
          }
        }
      }
    }
    .business {
      padding-bottom:.3rem;
      .business_box {
        width: 6.88rem;
        margin: 0 auto;
        padding: .3rem;
        border-bottom: 1px solid #eee;
        .business_box_left {
          span {
            display: block;
            background-size: 100%;
            width: .84rem;
            height: .84rem;
            margin-bottom: .1rem;
          }
          span.icon_xqj{
            .bg-img(us_project_logo_17); 
            .bg-img(us_project_logo_17);
          }
          span.icon_lnyp{
            .bg-img(us_project_logo_15); 
            .bg-img(us_project_logo_15);
          }
          span.icon_hxb{
            .bg-img(us_project_logo_13); 
            .bg-img(us_project_logo_13);
          }
          p { text-align: center; color: @theme}
        }
        .business_box_right {
          width: 5rem;
          .business_box_intro {
            line-height: .52rem;
            div {
              &:first-child{ color:@theme-secondary }
              &:last-child{ color:@theme-black;}
            }
          }
          .special_css{
            margin-top:.3rem;
          }
        }
      }
    }
  }
}
</style>
