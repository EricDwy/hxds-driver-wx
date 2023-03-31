<template>
    <view>
        <view class="review-container" v-show="reviewAuth">
            <image src="../../static/workbench/review.png" mode="widthFix"></image>
            <view class="title">您的实名资料正在审核中</view>
            <view class="desc">这期间您将无法接单，请等待资料审核通过</view>
        </view>
        <view v-show="!reviewAuth">
            <view class="top-container">
                <view class="notice">今日数据：凌晨00:00 ~ 本日23:59</view>
                <view class="summary-container">
                    <view class="item">
                        <view class="title">代驾时长</view>
                        <view class="value">
                            <text class="number">{{ hour }}</text>
                            <text class="unit">时</text>
                        </view>
                    </view>
                    <view class="item">
                        <view class="title">今日收入</view>
                        <view class="value">
                            <text class="number">{{ income }}</text>
                            <text class="unit">元</text>
                        </view>
                    </view>
                    <view class="item">
                        <view class="title">今日成单</view>
                        <view class="value">
                            <text class="number">{{ orders }}</text>
                            <text class="unit">单</text>
                        </view>
                    </view>
                </view>
                <view class="service-container">
                    <view class="item" :style="service.locationStyle">
                        <image :src="service.locationIcon" mode="widthFix" class="icon icon-1"></image>
                        {{ service.locationText }}
                    </view>
                    <view class="item" :style="service.messageStyle">
                        <image :src="service.messageIcon" mode="widthFix" class="icon icon-2"></image>
                        {{ service.messageText }}
                    </view>
                    <view class="item" :style="service.listenStyle" @tap="listenHandle()">
                        <image :src="service.listenIcon" mode="widthFix" class="icon icon-3"></image>
                        {{ service.listenText }}
                    </view>
                    <view class="item" :style="service.settingStyle" @tap="settingHandle()">
                        <image :src="service.settingIcon" mode="widthFix" class="icon icon-4"></image>
                        {{ service.settingText }}
                    </view>
                </view>
            </view>
            <view v-show="workStatus == '停止接单'">
                <map id="map" :longitude="longitude" :latitude="latitude" scale="15" :style="contentStyle" :enable-traffic="true" :show-location="true" :enable-poi="true">
                    <cover-image class="location" src="../../static/workbench/location.png" @tap="returnLocationHandle()"></cover-image>
                </map>
            </view>
            <scroll-view scroll-y="true" :style="contentStyle" v-show="workStatus == '开始接单'">
                <view class="new-order">
                    <view v-if="newOrder == null">
                        <image src="../../static/workbench/no-order.png" mode="widthFix" class="no-order-img"></image>
                        <view class="no-order-title">目前暂无订单</view>
                    </view>
                    <view v-if="newOrder != null">
                        <view class="line-1">
                            <view>
                                <view class="sub-time">距离您</view>
                                <view>
                                    <text class="number">{{ newOrder.distance }}</text>
                                    <text class="unit">公里</text>
                                </view>
                            </view>
                            <view>
                                <view class="sub-time">全程</view>
                                <view>
                                    <text class="number">{{ newOrder.mileage }}</text>
                                    <text class="unit">公里</text>
                                </view>
                            </view>
                            <view>
                                <view class="tag">含加价{{ newOrder.favourFee }}元</view>
                                <view>
                                    <text class="number">{{ newOrder.expectsFee }}</text>
                                    <text class="unit">元</text>
                                </view>
                            </view>
                        </view>
                        <view class="line-2">
                            <view class="from">
                                <text>{{ newOrder.from }}</text>
                            </view>
                            <view class="dashed-line"></view>
                            <view class="to">
                                <text>{{ newOrder.to }}</text>
                            </view>
                        </view>
                        <button :class="!canAcceptOrder ? 'disabled-btn' : 'accept-btn'" @tap="acceptHandle">立即抢单</button>
                    </view>
                </view>
                <view class="notice-container">
                    <view class="title">【 抢单说明 】</view>
                    <view class="desc">
                        <text class="num">1.</text>
                        当前地区可能存在多个代驾订单，但是司机端只能显示其中一条订单。这是为了保障代驾乘客订单的接单率，避免代驾司机只挑选优质订单。
                    </view>
                    <view class="desc">
                        <text class="num">2.</text>
                        某条订单如果10秒钟之内您没有抢单，系统则认定您主动放弃该订单，系统将为你推送新的订单。
                    </view>
                </view>
            </scroll-view>
            <scroll-view scroll-y="true" :style="contentStyle" class="execute-order-container" v-show="['接客户', '到达代驾点', '开始代驾'].includes(workStatus)">
                <view class="call" @tap="callCustomerHandle"></view>
                <view class="customer-container">
                    <u-avatar :src="executeOrder.photo" mode="square"></u-avatar>
                    <view class="info">
                        <view class="customer-name">代驾客户（{{ executeOrder.title }}）</view>
                        <view class="customer-tel">Tel：{{ executeOrder.tel }}</view>
                    </view>
                </view>
                <view class="address-container">
                    <view class="from">
                        <text>{{ executeOrder.startPlace }}</text>
                    </view>
                    <view class="dashed-line"></view>
                    <view class="to">
                        <text>{{ executeOrder.endPlace }}</text>
                    </view>
                </view>
                <view class="order-container">
                    <view>【 订单号码 】 {{ executeOrder.id }}</view>
                    <view>【 下单时间 】 {{ executeOrder.createTime }}</view>
                    <view>【 客户红包 】 {{ executeOrder.favourFee }}元</view>
                    <view>【 代驾车型 】 {{ executeOrder.carType }}</view>
                    <view>【 代驾车牌 】 {{ executeOrder.carPlate }}</view>
                </view>
                <view class="operate-container">
                    <view class="item" @tap="cancelOrderHandle">
                        <image src="../../static/workbench/cancel-icon.png" mode="widthFix" class="cancel-icon"></image>
                        <text class="cancel-text">取消订单</text>
                    </view>
                    <view class="vline"></view>
                    <view class="item" v-show="workStatus == '接客户'" @tap="arriveStartPlaceHandle">
                        <image src="../../static/workbench/arrive-start-icon.png" mode="widthFix" class="arrive-start-icon"></image>
                        <text class="arrive-start-text">到达代驾点</text>
                    </view>
                    <view class="item" v-show="workStatus == '到达代驾点'" @tap="startDrivingHandle">
                        <image src="../../static/workbench/drive-start-icon.png" mode="widthFix" class="drive-start-icon"></image>
                        <text class="drive-start-text">开始代驾</text>
                    </view>
                    <view class="item" v-show="workStatus == '开始代驾'" @tap="endDrivingHandle">
                        <image src="../../static/workbench/drive-stop-icon.png" mode="widthFix" class="drive-stop-icon"></image>
                        <text class="drive-stop-text">结束代驾</text>
                    </view>
                    <view class="vline"></view>
                    <view class="item">
                        <image src="../../static/workbench/alarm-icon.png" mode="widthFix" class="alarm-icon"></image>
                        <text class="alarm-text">立即报警</text>
                    </view>
                </view>
                <view class="other-container">
                    <view class="item" @tap="showNavigationHandle">
                        <image src="../../static/workbench/other-icon-1.png" mode="widthFix" class="location-icon"></image>
                        <text class="location-text">定位导航</text>
                    </view>
                    <view class="item" @tap="showMoveHandle">
                        <image src="../../static/workbench/other-icon-2.png" mode="widthFix" class="display-icon"></image>
                        <text class="display-text">司乘同显</text>
                    </view>
                    <view class="item" @tap="showOrderHandle">
                        <image src="../../static/workbench/other-icon-3.png" mode="widthFix" class="order-icon"></image>
                        <text class="order-text">订单详情</text>
                    </view>
                    <view class="item" @tap="callServiceHandle">
                        <image src="../../static/workbench/other-icon-4.png" mode="widthFix" class="service-icon"></image>
                        <text class="service-text">客服热线</text>
                    </view>
                </view>
            </scroll-view>
            <view class="bottom-container" v-show="['开始接单', '停止接单'].includes(workStatus)">
                <view class="btn" @tap="gohomeHandle()">
                    <image src="../../static/workbench/btn-icon-1.png" mode="widthFix" class="btn-icon-1"></image>
                    <text>回家</text>
                </view>
                <view class="btn primary">
                    <text v-show="workStatus == '停止接单'" @tap="startWorkHandle()">开始接单</text>
                    <text v-show="workStatus == '开始接单'" @tap="stopWorkHandle()">停止接单</text>
                </view>
                <view class="btn" @tap="rechargeHandle()">
                    <image src="../../static/workbench/btn-icon-2.png" mode="widthFix" class="btn-icon-2"></image>
                    <text>充值</text>
                </view>
            </view>
        </view>
        <u-top-tips ref="uTips"></u-top-tips>
        <u-toast ref="uToast" />
        <u-modal
            v-model="model.cancelConfirm.show"
            :title="model.cancelConfirm.title"
            :content="model.cancelConfirm.content"
            :show-confirm-button="true"
            :show-cancel-button="true"
            @confirm="confirmCancelOrder"
        ></u-modal>
        <u-modal
            v-model="model.cancelSuccess.show"
            :title="model.cancelSuccess.title"
            :content="model.cancelSuccess.content"
            :show-confirm-button="true"
            :show-cancel-button="false"
        ></u-modal>
    </view>
</template>

<script>
let QQMapWX = require('../../lib/qqmap-wx-jssdk.min.js');
let qqmapsdk;

let plugin = requirePlugin('WechatSI');
let dayjs = require('dayjs');
export default {
    data() {
        return {
            reviewAuth: uni.getStorageSync('realAuth') == 3,
            hour: 0,
            income: 0,
            orders: 0,
            map: null,
            windowHeight: 0,
            contentStyle: '',
            latitude: 39.908823,
            longitude: 116.39747,
            service: {
                locationIcon: '../../static/workbench/service-icon-1.png',
                locationText: '定位正常',
                locationStyle: '',
                messageIcon: '../../static/workbench/service-icon-2.png',
                messageText: '推送正常',
                messageStyle: '',
                listenIcon: '../../static/workbench/service-icon-3.png',
                listenText: '收听订单',
                listenStyle: '',
                settingIcon: '../../static/workbench/service-icon-4.png',
                settingText: '接单设置',
                settingStyle: ''
            },
            settings: {
                listenService: true,
                autoAccept: false
            },
            workStatus: uni.getStorageSync('workStatus'),
            newOrder: null,
            newOrderList: [],
            executeOrder: {
                id: '',
                photo: '',
                title: '',
                tel: '',
                customerId: '',
                startPlace: '',
                startPlaceLocation: {},
                endPlace: '',
                endPlaceLocation: {},
                favourFee: '',
                carPlate: '',
                carType: '',
                createTime: ''
            },
            reciveNewOrderTimer: null,
            playFlag: false,
            audio: null,
            canAcceptOrder: false,
            accepting: false,
            showModel: false,
            modelTitle: '',
            modelContent: '',
            model: {
                cancelConfirm: {
                    show: false,
                    title: '提示消息',
                    content: '如果不满足订单免费取消规则，只能有偿取消订单，并且可能被禁止接单一段时间，您确认要取消当前订单？'
                },
                cancelSuccess: {
                    show: false,
                    title: '提示消息',
                    content: ''
                }
            },
            recordNum: 0,
            recordManager: null,
            stopRecord: false
        };
    },
    methods: {
        changeListenService: function(bool) {
            if (bool) {
                this.service.listenIcon = '../../static/workbench/service-icon-3.png';
                this.service.listenStyle = 'color:#46B68F';
                this.service.listenText = '收听订单';
            } else {
                this.service.listenIcon = '../../static/workbench/service-icon-7.png';
                this.service.listenStyle = 'color:#FF4D4D';
                this.service.listenText = '不听订单';
            }
        },
        returnLocationHandle: function() {
            this.map.moveToLocation();
        },
        startWorkHandle: function() {
            let that = this;
            /*
             * TODO 检查司机是否可以接单
             * 1.没有被禁止接单
             * 2.没有未缴纳的罚款
             * 3.当天已经做了人脸验证
             */
            //设置司机当天通过身份验证
            uni.setStorageSync('verification', { result: true, date: dayjs().format('YYYY-MM-DD') });

            uni.showModal({
                title: '提示消息',
                content: '你要开始接收代驾订单信息？',
                success: function(resp) {
                    if (resp.confirm) {
                        uni.vibrateShort({});
                        let audio = uni.createInnerAudioContext();
                        that.audio = audio;
                        audio.src = '/static/voice/voice_1.mp3';
                        audio.play();
                        that.$refs.uToast.show({
                            title: '开始接单了',
                            type: 'success',
                            callback: function() {
                                that.ajax(that.url.startWork, 'POST', null, function(resp) {});
                                uni.setStorageSync('workStatus', '开始接单');
                                that.workStatus = '开始接单';
                                //初始化新订单和列表变量
                                that.newOrder = null;
                                that.newOrderList.length = 0;
                                that.executeOrder = {};
                                //创建接收新订单消息的定时器，每隔5秒钟接收一次新订单消息
                                if (that.reciveNewOrderTimer == null) {
                                    that.reciveNewOrderTimer = that.createTimer(that);
                                }
                            }
                        });
                    }
                }
            });
        },
        stopWorkHandle: function() {
            let that = this;
            uni.showModal({
                title: '提示消息',
                content: '你要停止接收代驾订单信息？',
                success: function(resp) {
                    if (resp.confirm) {
                        uni.vibrateShort({});
                        if (that.audio != null) {
                            that.audio.stop();
                        }
                        let audio = uni.createInnerAudioContext();
                        that.audio = audio;
                        audio.src = '/static/voice/voice_2.mp3';
                        audio.play();
                        that.$refs.uToast.show({
                            title: '停止接单了',
                            type: 'default',
                            callback: function() {
                                that.ajax(that.url.stopWork, 'POST', null, function(resp) {});
                                that.workStatus = '停止接单';
                                uni.setStorageSync('workStatus', '停止接单');
                                //初始化新订单和列表变量
                                that.newOrder = null;
                                that.newOrderList.length = 0;
                                that.executeOrder = {};
                                //销毁接收新订单消息的定时器
                                clearInterval(that.reciveNewOrderTimer);
                                that.reciveNewOrderTimer = null;
                                that.playFlag = false;
                            }
                        });
                    }
                }
            });
        },
        createTimer: function(ref) {
            let timer = setInterval(function() {
                ref.ajax(
                    ref.url.receiveNewOrderMessage,
                    'POST',
                    null,
                    function(resp) {
                        let result = resp.data.result;
                        if (result.length > 0) {
                            // console.log(result);
                            ref.newOrderList = result.concat(ref.newOrderList);
                            if (ref.playFlag == false) {
                                //调用封装函数
                                ref.showNewOrder(ref);
                            }
                        }
                    },
                    false
                );
            }, 5000);
            return timer;
        },
        showNewOrder: function(ref) {
            ref.playFlag = true;
            ref.canAcceptOrder = false;
            let order = ref.newOrderList.shift();
            let orderId = order.orderId;
            let distance = order.distance;
            let expectsFee = order.expectsFee;
            let favourFee = order.favourFee;
            let from = order.from;
            let to = order.to;
            let mileage = order.mileage;
            let minute = order.minute;
            ref.newOrder = {
                orderId: orderId,
                distance: distance,
                expectsFee: expectsFee,
                favourFee: favourFee,
                from: from,
                to: to,
                mileage: mileage,
                minute: minute
            };
            if (ref.settings.listenService) {
                let audio = uni.createInnerAudioContext();
                ref.audio = audio;
                plugin.textToSpeech({
                    lang: 'zh_CN',
                    tts: true,
                    content: `即时订单，距离您${distance}公里，从${from}，到${to}，全程约${mileage}公里，预估代驾费${expectsFee}元`,
                    success: function(resp) {
                        audio.src = resp.filename;
                        audio.play();
                        audio.onEnded(function() {
                            ref.canAcceptOrder = true;
                            let verification = uni.getStorageSync('verification');
                            /*
                             * TODO 判断人脸识别凭证是否过期，如果过期就要重新人脸验证。
                             * 这是以防司机今天开始接单人脸验证通过，但是一直没有停止接单，
                             * 到了次日依然要重新做人脸验证。
                             *
                             */
                            if (false) {
                            } else {
                                if (ref.settings.autoAccept) {
                                    let data = {
                                        orderId: orderId
                                    };
                                    ref.ajax(
                                        ref.url.acceptNewOrder,
                                        'POST',
                                        data,
                                        function(resp) {
                                            let result = resp.data.result;
                                            if (result == '接单成功') {
                                                uni.showToast({
                                                    title: '接单成功'
                                                });
                                                audio = uni.createInnerAudioContext();
                                                ref.audio = audio;
                                                audio.src = '/static/voice/voice_3.mp3';
                                                audio.play();
                                                audio.onEnded(function() {
                                                    ref.ajax(ref.url.stopWork, 'POST', null, function(resp) {});
                                                    //初始化新订单和列表变量
                                                    ref.newOrder = null;
                                                    ref.newOrderList.length = 0;
                                                    ref.executeOrder.id = orderId;
                                                    clearInterval(ref.reciveNewOrderTimer);
                                                    ref.reciveNewOrderTimer = null;
                                                    ref.playFlag = false;
                                                    //隐藏了工作台页面底部操作条之后，需要重新计算订单执行View的高度
                                                    ref.contentStyle = `width: 750rpx;height:${ref.windowHeight - 200 - 0}px;`;
                                                    //加载订单执行数据
                                                    ref.loadExecuteOrder(ref);
                                                });
                                            } else {
                                                //自动抢单失败
                                                audio = uni.createInnerAudioContext();
                                                ref.audio = audio;
                                                audio.src = '/static/voice/voice_4.mp3';
                                                audio.play();
                                                audio.onEnded(function() {
                                                    ref.playFlag = false;
                                                    if (ref.newOrderList.length > 0) {
                                                        ref.showNewOrder(ref);
                                                    } else {
                                                        ref.newOrder = null;
                                                    }
                                                });
                                            }
                                        },
                                        false
                                    );
                                } else {
                                    ref.playFlag = false;
                                    setTimeout(function() {
                                        //如果用户不是正在手动抢单中，就播放下一个新订单
                                        if (!ref.accepting) {
                                            ref.canAcceptOrder = false;
                                            if (ref.newOrderList.length > 0) {
                                                ref.showNewOrder(ref); //递归调用
                                            } else {
                                                ref.newOrder = null;
                                            }
                                        }
                                    }, 3000);
                                }
                            }
                        });
                    },
                    fail: function(resp) {
                        console.error('语音订单播报失败', resp);
                        ref.playFlag = false;
                        ref.canAcceptOrder = true;
                        ref.acception = false;
                    }
                });
            }
        },
        acceptHandle: function() {
            let that = this;
            if (!that.canAcceptOrder || that.accepting) {
                return;
            }
            that.accepting = true;
            uni.vibrateShort({});
            that.ajax(that.url.acceptNewOrder, 'POST', { orderId: that.newOrder.orderId }, function(resp) {
                let audio = uni.createInnerAudioContext();
                let result = resp.data.result;
                //手动抢单成功
                if (result == '接单成功') {
                    uni.showToast({
                        title: '接单成功'
                    });
                    that.audio = audio;
                    audio.src = '/static/voice/voice_3.mp3';
                    audio.play();
                    audio.onEnded(function() {
                        //停止接单
                        that.audio = null;
                        that.ajax(that.url.stopWork, 'POST', null, function(resp) {});
                        //初始化新订单和列表变量
                        that.executeOrder.id = that.newOrder.orderId;
                        that.newOrder = null;
                        that.newOrderList.length = 0;
                        clearInterval(that.reciveNewOrderTimer);
                        that.reciveNewOrderTimer = null;
                        that.playFlag = false;
                        that.accepting = false;
                        that.canAcceptOrder = false;
                        //隐藏了工作台页面底部操作条之后，需要重新计算订单执行View的高度
                        that.contentStyle = `width: 750rpx;height:${that.windowHeight - 200 - 0}px;`;
                        //加载订单执行数据
                        that.loadExecuteOrder(that);
                    });
                } else {
                    that.audio = audio;
                    audio.src = '/static/voice/voice_4.mp3';
                    audio.play();
                    that.playFlag = false;
                    setTimeout(function() {
                        that.accepting = false;
                        that.canAcceptOrder = false;
                        if (that.newOrderList.length > 0) {
                            that.showNewOrder(that); //递归调用
                        } else {
                            that.newOrder = null;
                        }
                    }, 3000);
                }
            });
        },
        loadExecuteOrder: function(ref) {
            let data = {
                orderId: ref.executeOrder.id
            };
            ref.ajax(ref.url.searchDriverExecuteOrder, 'POST', data, function(resp) {
                let result = resp.data.result;
                ref.executeOrder = {
                    id: ref.executeOrder.id,
                    photo: result.photo,
                    title: result.title,
                    tel: result.tel,
                    customerId: result.customerId,
                    startPlace: result.startPlace,
                    startPlaceLocation: JSON.parse(result.startPlaceLocation),
                    endPlace: result.endPlace,
                    endPlaceLocation: JSON.parse(result.endPlaceLocation),
                    favourFee: result.favourFee,
                    carPlate: result.carPlate,
                    carType: result.carType,
                    createTime: result.createTime
                };
                ref.workStatus = '接客户';
                uni.setStorageSync('workStatus', '接客户');
                uni.setStorageSync('executeOrder', ref.executeOrder);
            });
        },
        callCustomerHandle: function() {
            let that = this;
            uni.makePhoneCall({
                phoneNumber: that.executeOrder.tel
            });
        },
        callServiceHandle: function() {
            let that = this;
            uni.makePhoneCall({
                phoneNumber: '10086'
            });
        },
        showMoveHandle: function() {
            let that = this;
            uni.navigateTo({
                url: '../../execution/move/move?orderId=' + that.executeOrder.id
            });
        },
        arriveStartPlaceHandle: function() {
            let that = this;
            uni.showModal({
                title: '消息通知',
                content: '确认已经到达了代驾点？',
                success: function(resp) {
                    if (resp.confirm) {
                        // qqmapsdk.calculateDistance({
                        //     mode: 'straight',
                        //     from: {
                        //         latitude: that.latitude,
                        //         longitude: that.longitude
                        //     },
                        //     to: [
                        //         {
                        //             latitude: that.executeOrder.startPlaceLocation.latitude,
                        //             longitude: that.executeOrder.startPlaceLocation.longitude
                        //         }
                        //     ],
                        //     success: function(resp) {
                        //         let distance = resp.result.elements[0].distance;
                        //         if (distance <= 1000) {
                                    let data = {
                                        orderId: that.executeOrder.id,
                                        customerId: that.executeOrder.customerId
                                    };
                                    that.ajax(that.url.arriveStartPlace, 'POST', data, function(resp) {
                                        if (resp.data.rows == 1) {
                                            uni.showToast({
                                                icon: 'success',
                                                title: '订单状态更新成功'
                                            });
                                            that.workStatus = '到达代驾点';
                                            uni.setStorageSync('workStatus', '到达代驾点');
                                        }
                                    });
                        //         } else {
                        //             uni.showToast({
                        //                 icon: 'none',
                        //                 title: '请移动到距离代驾起点1公里以内'
                        //             });
                        //         }
                        //     },
                        //     fail: function(error) {
                        //         console.log(error);
                        //     }
                        // });
                    }
                }
            });
        },
        startDrivingHandle: function() {
            let that = this;
            uni.showModal({
                title: '消息通知',
                content: '您已经接到客户，现在开始代驾？',
                success: function(resp) {
                    if (resp.confirm) {
                        //设置录音标志位
                        that.stopRecord = false;
                        let data = {
                            orderId: that.executeOrder.id,
                            customerId: that.executeOrder.customerId
                        };
                        that.ajax(that.url.startDriving, 'POST', data, function(resp) {
                            if (resp.data.rows == 1) {
                                uni.showToast({
                                    icon: 'success',
                                    title: '订单状态更新成功'
                                });
                                that.workStatus = '开始代驾';
                                uni.setStorageSync('workStatus', '开始代驾');
                                //开始录音
                                that.recordManager.start({ duration: 20 * 1000, lang: 'zh_CN' });
                            }
                        });
                    }
                }
            });
        },
        endDrivingHandle: function() {
            let that = this;
            uni.showModal({
                title: '消息通知',
                content: '已经到达终点，现在结束代驾？',
                success: function(resp) {
                    if (resp.confirm) {
                        // qqmapsdk.calculateDistance({
                        //     mode: 'straight',
                        //     from: {
                        //         latitude: that.latitude,
                        //         longitude: that.longitude
                        //     },
                        //     to: [
                        //         {
                        //             latitude: that.executeOrder.endPlaceLocation.latitude,
                        //             longitude: that.executeOrder.endPlaceLocation.longitude
                        //         }
                        //     ],
                        //     success: function(resp) {
                        //         let distance = resp.result.elements[0].distance;
                        //         if (distance <= 2000) {
                                    let data = {
                                        orderId: that.executeOrder.id,
                                        customerId: that.executeOrder.customerId,
                                        status: 5
                                    };
                                    that.ajax(that.url.updateOrderStatus, 'POST', data, function(resp) {
                                        that.stopRecord = true;
                                        try {
                                            that.recordManager.stop();
                                            that.recordNum = 0;
                                            that.stopRecord = false;
                                            that.workStatus = '结束代驾';
                                            uni.setStorageSync('workStatus', '结束代驾');
                                            uni.navigateTo({
                                                url: '../../order/enter_fee/enter_fee?orderId=' + that.executeOrder.id + '&customerId=' + that.executeOrder.customerId
                                            });
                                        } catch (e) {
                                            console.error(e);
                                        }
                                    });
                        //         } else {
                        //             uni.showToast({
                        //                 icon: 'none',
                        //                 title: '请移动到距离代驾终点2公里以内'
                        //             });
                        //         }
                        //     },
                        //     fail: function(error) {
                        //         console.log(error);
                        //     }
                        // });
                    }
                }
            });
        },
        showNavigationHandle: function() {
            let that = this;
            let latitude = null;
            let longitude = null;
            let destination = null;
            if (that.workStatus == '接客户') {
                latitude = Number(that.executeOrder.startPlaceLocation.latitude);
                longitude = Number(that.executeOrder.startPlaceLocation.longitude);
                destination = that.executeOrder.startPlace;
            } else {
                latitude = Number(that.executeOrder.endPlaceLocation.latitude);
                longitude = Number(that.executeOrder.endPlaceLocation.longitude);
                destination = that.executeOrder.endPlace;
            }
            //打开手机导航软件
            that.map.openMapApp({
                latitude: latitude,
                longitude: longitude,
                destination: destination
            });
        },

    },
    onLoad: function() {
        let that = this;
        //新添加----------------------------------------------
        qqmapsdk = new QQMapWX({
            key: that.tencent.map.key
        });
        //---------------------------------------------------
        if (!that.reviewAuth) {
            let windowHeight = uni.getSystemInfoSync().windowHeight;
            that.windowHeight = windowHeight;
            let recordManager = plugin.getRecordRecognitionManager(); //初始化录音管理器

            recordManager.onStop = function(resp) {
                if (that.workStatus == '开始代驾' && that.stopRecord == false) {
                    that.recordManager.start({ duration: 20 * 1000, lang: 'zh_CN' });
                }

                let tempFilePath = resp.tempFilePath;
                //上传录音
                that.recordNum += 1;
                let data = {
                    name: `${that.executeOrder.id}-${that.recordNum}.mp3`,
                    text: resp.result
                };
                // console.log(data);
                that.upload(that.url.uploadRecordFile, tempFilePath, data, function(resp) {
                    console.log('录音上传成功');
                });
            };
            recordManager.onStart = function(resp) {
                console.log('成功开始录音识别');
                if (that.recordNum == 0) {
                    uni.vibrateLong({
                        complete: function() {}
                    });
                    uni.showToast({
                        icon: 'none',
                        title: '请提示客户系上安全带！'
                    });
                }
            };
            recordManager.onError = function(resp) {
                console.error('录音识别故障', resp.msg);
            };

            that.recordManager = recordManager;
        }
        //查询正在执行的订单
        that.ajax(
            that.url.searchDriverCurrentOrder,
            'POST',
            null,
            function(resp) {
                if (resp.data.hasOwnProperty('result')) {
                    let result = resp.data.result;
                    that.executeOrder = {
                        id: result.id,
                        photo: result.photo,
                        title: result.title,
                        tel: result.tel,
                        customerId: result.customerId,
                        startPlace: result.startPlace,
                        startPlaceLocation: JSON.parse(result.startPlaceLocation),
                        endPlace: result.endPlace,
                        endPlaceLocation: JSON.parse(result.endPlaceLocation),
                        favourFee: result.favourFee,
                        carPlate: result.carPlate,
                        carType: result.carType,
                        createTime: result.createTime
                    };
                    let map = {
                        '2': '接客户',
                        '3': '到达代驾点',
                        '4': '开始代驾'
                    };
                    that.contentStyle = `width: 750rpx;height:${that.windowHeight - 200 - 0}px;`;
                    that.workStatus = map[result.status + ''];
                    uni.setStorageSync('workStatus', that.workStatus);
                    uni.setStorageSync('executeOrder', that.executeOrder);
                    // console.log(that.workStatus);
                    if (that.workStatus == '开始代驾') {
                        that.recordManager.start({ duration: 20 * 1000, lang: 'zh_CN' });
                    }
                }
            },
            false
        );

        //初始化地图
        that.map = uni.createMapContext('map');
    },
    onShow: function() {
        let that = this;

        //TODO 定时刷新消息

        //TODO 更新消息服务状态，可用或者不可用

        if (!that.reviewAuth) {
            //查询控制台数据
            that.ajax(that.url.searchWorkbenchData, 'POST', null, function(resp) {
                let result = resp.data.result;
                that.hour = result.business.duration;
                that.income = result.business.income;
                that.orders = result.business.orders;

                let settings = result.settings;
                uni.setStorageSync('settings', settings);
                that.settings.listenService = settings.listenService;
                that.settings.autoAccept = settings.autoAccept;
                that.changeListenService(that.settings.listenService);
            });

            //实时获取定位
            uni.$on('updateLocation', function(location) {
                // console.log(location)
                if (location != null) {
                    that.service.locationIcon = '../../static/workbench/service-icon-1.png';
                    that.service.locationText = '定位正常';
                    that.service.locationStyle = 'color:#46B68F';
                    that.latitude = location.latitude;
                    that.longitude = location.longitude;
                } else {
                    that.service.locationIcon = '../../static/workbench/service-icon-5.png';
                    that.service.locationText = '定位失败';
                    that.service.locationStyle = 'color:#FF4D4D';
                }
            });

            let workStatus = uni.getStorageSync('workStatus');

            //判断工作状态，是否定时轮询接单
            if (workStatus == '开始接单') {
                that.newOrder = null;
                that.newOrderList.length = 0;
                that.playFlag = false;
                //创建接收新订单消息的定时器，每隔5秒钟接收一次新订单消息
                that.reciveNewOrderTimer = that.createTimer(that);
            }

            //初始化控件高度
            if (['接客户', '到达代驾点', '开始代驾'].includes(workStatus)) {
                that.contentStyle = `width: 750rpx;height:${that.windowHeight - 200 - 0}px;`;
            } else {
                that.contentStyle = `width: 750rpx;height:${that.windowHeight - 200 - 70}px;`;
            }
        }
    },
    onHide: function() {
        uni.$off('updateLocation');
        this.newOrder = null;
        this.newOrderList.length = 0;
        if (this.audio != null) {
            this.audio.stop();
            this.audio = null;
        }
        clearInterval(this.reciveNewOrderTimer);
        this.reciveNewOrderTimer = null;
        this.playFlag = false;
    }
};
</script>

<style lang="less">
@import url('workbench.less');
</style>
