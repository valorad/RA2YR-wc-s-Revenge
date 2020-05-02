# wcR plan for Mental Omega
“wc的复仇” 是室长版的后续作品，相较室长版，“wc的复仇”在保持娱乐性的同时尽最大可能进行了平衡。wcR的设计风格是“嵌入”型的，对于原版游戏可以直接运行，而第三方mod可以直接将代码插入。

## 适用版本
Mental Omega ^3.3.0

## 代码分离表

``` ini
; rulesmd.ini
[#include]
10=wcr-rules-animations.ini
20=wcr-rules-warheads.ini
30=wcr-rules-projectiles.ini
40=wcr-rules-weapons.ini
50=wcr-rules-buildings.ini
60=wcr-rules-vehicles.ini
70=wcr-rules-infantries.ini
80=wcr-rules-aircrafts.ini
90=wcr-rules-superweapons.ini

100=wcr-rules-adjustments.ini

200=cheats.ini ; local copy will not sync

; artmd.ini
[#include]
10=wcr-art-animations.ini
50=wcr-art-buildings.ini
60=wcr-art-vehicles.ini
70=wcr-art-infantries.ini
80=wcr-art-aircrafts.ini


; soundmd.ini
[#include]
100=wcr-sounds-adjustments.ini


```

## Rules

### 步兵

位于wcr-rules-infantries.ini

---

[ID] F-形象 P-建造要求 W1-主武器 W2-副武器 WO-驻防武器 WFV-多功能车武器 WD-死亡武器 N-备注

---
盟军：
- （飞行兵）阿瑞斯之鹰[vaIAresEagle] F-火箭飞行兵[JUMPJET] P-尖碑实验室[vaBObelisk] W1-便携巨炮[vaWPortCannonLG] W2-航空炮[vaWA20mm] WO- WFV- WD-中型爆炸[vaWExplMD] N-重甲，飞行单位，飞行较慢
- 重装精英[vaIHAElite] F-重装大兵[GGI] P-盟军科技中心[GATECH] W1-M60Plus机枪[vaWM60Plus] W2-RPG[vaWRPG] WO-RPG[vaWRPG] WFV-RPG[vaWRPG] WD-小型爆炸[vaWExplSM] N-护甲很厚，移动慢，无法碾压
- 王牌特工[vaISuperAgent] F-间谍[SPY] P-尖碑实验室[vaBObelisk] W1-间谍伪装[] W2-冲锋枪[] WO- WFV- WD-小型能量爆炸[vaWEnergyExplSM] N- 两栖，不能被碾压，不能升级，视野很大，隐形，通过部署切换武器，冲锋枪是类似海豹部队的
- 伽马猴[vaIGammaApe] F-猴子[JOSH] P-盟军科技中心 W1-伽马击毙[vaWGammaInstantKill] W2- WO- WFV- WD- N-两栖，可以抢劫敌方坦克，不会主动攻击也不会被主动攻击，能够秒杀1个步兵，但需冷却很长时间
- ============ 英雄 ============
- 史蒂夫[vaISteve] F-海豹部队[GHOST] P-尖碑实验室[vaBObelisk] W1-激光机枪[vaWLaserGatling] W2- WO- MFV-激光机枪[vaWLaserGatling] WD-大型能量爆炸[vaWEnergyExplLG] N-两栖，移动迅速，可以对空也可以对地
- 戴斯蒙[vaIDesmond] F-终结者[ARND] N-超远程的狙击手，攻速很慢，射程很远，会击杀坦克的司机，隐形，对地，对空（仅飞行兵）

苏联：
- 无辜小平民[vaIWuGuCiv] F-平民[CIV2] P-苏联实验室组[SOVTECH] W1-伊文炸药[IvanBomber] W2-  WO- MFV-迷你核弹[CRNuke] WD-伊文炸药[IvanBomber] N-两栖，武器和疯狂伊文完全相同，不会被主动攻击，视野很大
- 磁暴追猎者[vaIEShockStalker] F-磁暴步兵[SHK] P-苏联实验室组[SOVTECH] W1-改良磁暴枪[vaWAdvEShooter] W2-(充电枪)  WO- MFV-改良磁暴枪[vaWAdvEShooter] WD-小型能量爆炸[vaWEnergyExplSM] N-两栖，可以对空又对地，无法碾压，重甲却有较快移动速度
- （飞行兵）战熊飞行兵[vaIBatBearJet] F-登月火箭员[LUNR] P-红堡实验室[vaBRedFort] W1-巨型电弧炮[vaWTslArcCannon] W2-  WO- MFV- WD-中型能量爆炸[vaWEnergyExplMD] N-飞行单位
- 伞兵终结者[vaIParaTerminator] F-防空步兵[FLAKT] P-苏联实验室组[SOVTECH] W1-迫击炮[vaWMortar] W2-轻型防空炮（对空）[vaWLightFlakAA]  WO- MFV- WD-小型爆炸[vaWExplSM] N-重甲，无法碾压，移动慢，射程较远，范围伤害，对坦克伤害大
- ============ 英雄 ============
- 欧列格[vaIOleg] F-辐射工兵[DESO] P-红堡实验室[vaBRedFort] W1-剧毒放射弹[vaWDesoChem] W2-剧毒震爆[vaWDesoEruptor]  WO- MFV- WD-大型核爆[NukePayload] N-重甲，无法碾压，移动慢，可以对空对地
- 卡斯力[vaIKhaslik] F-心灵突击队[PTROOP] P-红堡实验室[vaBRedFort] W1-隐刀[vaIHiddenBlade] W2- WD- WO- WFV- N-两栖，隐刀，只能对地

厄普西隆：
- （飞行兵）心灵主宰[vaIMindDominator] F-尤里X[YURIPR] P-心智升华室[vaBMindMutator] W1-心灵控制【全向】[vaWMulCtrlAAG] W2-精神鞭笞【全向】[vaWPsyTortureAAG] WO- MFV- WD-中型心灵震爆[vaWPsyDetonatorMD] N-飞行单位，最多控制3个，通过部署切换武器，移动慢
- 夜魔[vaINoctevo] F-狂兽人[BRUTE] P-雷达类 W1-AA N-两栖，隐形单位，视野大，只能对空，不主动攻击别人，驻防和IFV武器和狂兽人一样
- 异场武士[vaIAlienWarrior] F-平民[CIVA] P-潘多拉枢纽[YATECH] W1-强力拳击[vaWOvPunch] W2-磁电拉举[MagneticBeam] WO- MFV- WD-中型心灵震爆[vaWPsyDetonatorMD] N-两栖，类似对付步兵和建筑时近战，对付载具时抬升。
- 怨灵[vaIEvlSpirit] F-病毒狙击手[VIRUS] P-潘多拉枢纽[YATECH] W1-病毒枪V-II[vaWVirusvII] W2-病毒枪V-II（反载具）[vaWVirusvIIAV] WO- MFV- WD-毒雾[vaWVirusGas] N-对付步兵用快速的病毒狙击枪，而对付载具和建筑的时候用反载具的。可以空中 地面
- ============ 英雄 ============
- 哥兰图[vaIGranto] F-狂兽人[BRUTE] P-心智升华室[vaBMindMutator] W1-小型心灵震爆[vaWPsyDetonatorSM] W2- WO-小型心灵震爆[vaWPsyDetonatorSM] MFV-小型心灵震爆[vaWPsyDetonatorSM] WD-大型心灵震爆[vaWPsyDetonatorLG] N-两栖，对空 对地
- （飞行兵）芬雷[vaIFinley]  F-木乃伊[MUMY] P-心智升华室[vaBMindMutator] W1-病毒高爆弹 W2- WD- WO- WFV- N-发射病毒炮弹，炮弹高爆分裂，步兵死亡会变成毒雾

焚风：
- 光棱兵[vaIPrismS] F-超时空军团兵[CLEG] P-焚风扩展组[FOETECH] W1-便携光棱柱（对空又对地）[vaWPortablePrism] W2-  WO-光棱炮[vaWPrismCannon] WFV-光棱炮[vaWPrismCannon] WD-小型能量爆炸[vaWEnergyExplSM] N-对地对空
- 坦途行者[vaIRoamer] F-同步浪人[SYNC] P-焚风扩展组[FOETECH] W1-力场刃[vaWForceBlade] W2-  WO-[] WFV-[] WD-小型能量爆炸[vaWEnergyExplSM] N- 两栖，武器类似隐刀，远程，对地对空
- （飞行兵）怒风术士[vaIGaleWielder] F-忍者浪人[SYNC_N] P-飓风研究室[vaBCycloneLab] W1-[] W2-  WO-[] WFV-[] WD-中型能量爆炸[vaWEnergyExplSM] N- 武器是一种能量波，远程，对地对空
- 凶凶熊[vaIXiongxiongBear] F-北极熊[POLARB] P-雷达类 N-两栖，移动迅速，对步兵伤害非常高。

- ============ 英雄 ============
- 英霸[vaIImbart] F-长枪战士[COVE] P-飓风研究室[vaBCycloneLab] W1-狂野能量刃[vaWFierceASlash] W2-  WO-[] WFV-[] WD-大型能量爆炸[vaWEnergyExplLG] N- 长枪战士，近战，攻击有范围emp效果
- （飞行兵）盖索克斯[vaIGarzoks] F-天神克星[] P-飓风研究室[vaBCycloneLab] W1-[] W2-  WO-[] WFV-[] WD-大型能量爆炸[vaWEnergyExplLG] N- 天神克星


### 战车（包括战车工厂飞行器与海军）

位于wcr-rules-vehicles.ini

---

[ID] F-形象 P-建造要求 W1-主武器 W2-副武器 WD-死亡武器 Dp-展开为 N-备注

---
盟军：
- 豪华飞车[vaVLimoRaceCar] F-豪华轿车[LIMO] P-盟军战车工厂[GAWEAP] W1-无 W2-无 WD-无 N-侦察车，无武器，不主动被攻击，视野大
- 杜莎大导弹[vaVDusaMissile] F-出租车[TAXI] P-盟军作战实验室 W1-美杜莎飞弹[vaWMedusa] W2- WD-小型爆炸[vaWExplSM] N- 专业对空导弹车，只能对空，移动速度慢
- （海军）核动力驱逐舰[vaVNukePoweredDest] F-驱逐舰[DEST] P-尖碑实验室 W1-集聚舰炮[vaWConCannon] (一次发3颗的155mm)，有范围伤害 W2-[ASWLauncher] WD-核弹[NukePayload] N-
- ============ 英雄 ============
- (飞行物) 战鹰[vaVBattleEagle] F-武装直升机[SCHP] P-尖碑实验室 W1-光棱机枪[vaWPrismGatling] W2-小型粒子对撞炮[vaWMolColCannonSM] WD-大型能量爆炸[vaWEnergyExplLG] N-光棱直升机

苏联：
- 低调的挖掘机[vaVLowKeyExcavator] F-挖掘机[CONA] P-苏联战车工厂[NAWEAP] W1-[20mmRapid] W2- WD- N-侦查车，武器与武装采矿车[HARV]相同，不主动攻击，不主动被攻击 视野大 RadarInvisible=yes
- 菜油榴弹炮 [vaVCaiyouHowitzer] F-榴弹炮[HOWI] P-红堡实验室 W1-远程榴弹[vaWLRHowitzer] W2- WD-中型爆炸 N-远程火力加强榴弹炮
- (海军)收割者[vaVReaper] F-无畏级战舰[DRED] P-红堡实验室 W1-无畏导弹[vaWOvDredLauncher] W2- WD-核弹[NukePayload] N-移动速度快，护甲高，发射6枚飞弹的无畏级
- ============ 英雄 ============
- 克里姆林天启[vaVKremlinApoc] F-天启坦克[APOC] P-红堡实验室 W1-克里姆林天启炮[vaWKremlinApocCannon] （1级像3级的普通天启炮，3级是炮带菜油榴弹炮效果）W2-克里姆林天启飞弹[] WD-大型核爆[vaWNukeExplLG] （1级像爱国者飞弹，3级带菜油榴弹炮效果） N-生命高，移动中速，可以碾压其他坦克

厄普西隆：
- 迷你小巴士[vaVMiniBus] F-巴士[DDBX] P-[YAWEAP] W1-无 W2- WD-无 N-中速的侦察车，可以载5人 视野大，不主动被攻击
- 傻x洲际火箭车[vaVShaChaICRocket] F-V3火箭发射车[V3] P-心智升华室 W1-洲际火箭[vaWICRocket] W2- WD-中型爆炸 N-超远程火箭发射车
- （海军）神速雷鸣潜艇[vaVSupBSubmarine] F-雷鸣攻击潜艇[BSUB] P-心智升华室 W1-急速水雷[vaWFastBoomer] W2-(导弹) WD-大型核爆[vaWNukeExplLG] N-快速的潜艇
- ============ 英雄 ============
- （飞行物）泽洛克母舰[vaVZeroc] F-航空母舰[CARRIER] P-心智升华室 N-可以大范围无限控制单位，移动慢

焚风：
- (飞行物) 蜜蜂侦察机[vaVReconBee] F-DiverBee[DIVER] P-[FOEWEAP] W1-无 W2- WD-无 N-中速的侦察机 视野非常大，不主动被攻击
- 广盘修护仪[vaVOmniRepairer] F-Orcinus[ORCIN] P-焚风扩展组[FOETECH] W1-无 W2- WD-无 N-移动极慢，全图修理单位
- （海军）离子切割舰[vaVIonDisShip] F-[] P-飓风研究室 W1-离子切割射线[vaWIonDisRay] W2-(导弹) WD-大型核爆[vaWNukeExplLG] N-射程远，对空对地
- ============ 英雄 ============
- 陷阵者[vaVFormPiercer] F-Megalodon[MEGA] P-飓风研究室[vaBCycloneLab] W1-无 W2- WD-无 N-生命高，移动快速，可以碾压其他坦克

其他：（兼容原版wcR的单位，不能建造）
- 太空轨道快递[vaVSpDelivery] F-坦克杀手[TNKD] P-尖碑实验室 W1-远程中子炮[vaWLRNeutrCannon] W2-无 WD-中型能量爆炸  N-远程超时空“冻结”炮攻击车，射程与巨炮相同，不能对空
- 刷屏干扰车[vaVSJammer] F-宣传车[PROPA] P-盟军作战实验室 W1-刷屏干扰波[vaWSJamBeam] W2- WD- N-骚扰型的战车，EMP武器，没有伤害，指哪儿打哪儿
- (飞行物) 医疗直升机[vaVMedicHeli] F-夜莺直升机[SHAD] P-尖碑实验室 W1-治疗波[vaWHealingBeam] W2- WD- N-
- （海军）乌贼王[vaVKingSquid] F-巨形乌贼[SQD] P-尖碑实验室 W1-乌贼王撞击[vaWKingSquidPunch] W2-[VirtualScanner] WD-小型心灵震爆 N-生命护甲很高的但移动略慢的巨形乌贼，自愈
- （海军）干扰碰碰船[vaVSJamBumperShip] F-海蝎[HYD] P-NATECH W1-EMP炸弹[vaWEMPBomb] W2- WD-EMP炸弹[vaWEMPBomb] N-EMP武器有伤害，干扰时间长，冲撞后自爆，自爆效果类似于超时空传走
- 迅雷蜘蛛[vaVThunderSpider] F-恐怖机器人[DRON] P-苏联作战实验室[NATECH] W1-超级寄生[vaWSuperDroneJump] W2-[VirtualScanner] WD-无 N-速度极快的恐怖机器人,可以寄生空中单位
- 辐照防空台[vaVDesAAPlatform] F-卡车[TRUCKA] P-苏联作战实验室[NATECH] W1-辐照防空束[vaWDesAABeam] W2- WD- 
- (飞行物)克里姆林基洛夫[vaVKremlinKirov] F-基洛夫空艇[ZEP] P-红堡实验室 W1-大型核爆[vaWNukeExplLG] W2- WD-大型核爆[vaWNukeExplLG] N-发动自毁，部署自毁
- (海军)奇异海豚[vaVAmzDolphin] F-海豚[DLPH] P-红堡实验室 W1-海豚激光[vaWAmzDolphinLaser] W2- WD-小型心灵震爆 V-15 N-快速快攻的海豚，可以浮出水面攻击地面部队，自愈
- (海军)伏特加战舰[vaVVoldkaVessel] F-宙斯盾巡洋舰[AEGIS] P-苏联作战实验室[NATECH] W1-感应伊文炸药[vaWIvanBomberSen] W2- WD-伊文炸药[IvanBomber] N-较远的疯狂伊文的武器
- 纵火狂[vaVPyromania] F-神经突击车[CAOS] P-尤里作战实验室[YATECH] W1-火枪[vaWFireThrower] W2- WD-小型心灵震爆 N-近程喷火车，可以对空对地
- 病毒狙击车[vaVVirusSniper] F-救护车[AMBU] P-尤里作战实验室[YATECH] W1-无 W2- WD-无 N-可以对空对地、射速很慢，射程较远，移动慢，生命高
- 心灵控制塔安装器[vaVMindCTMCV] F-尤里基地车[PCV] Dp-心灵控制塔[YAPSYT] P-（类似二级基地防御的建造条件） W1-心灵控制[MindControl] W2- WD-小型心灵震爆 N-生命值为心灵控制塔的80%
- （飞行物）泰坦直升机[vaVTitanHeli] F-雌鹿运输直升机[HIND] P-尤里战车工厂[YAWEAP] W1-[BlackHawkCannon] W2- WD-无 N-运16个人支持载具
- （海军）盖特小船[vaVGatVessel] F-[TUG] P-(RADAR) W1-[AGGattling] W2-[AAGattling] WD-无 N-
- (海军)心灵控制船[vaVMindCtrlVessel] F-游轮[CRUISE] P-尤里作战实验室[YATECH] W1-MindControl W2-MultipleMindControlTower WD-小型心灵震爆[vaWPsyDetonatorSM] N-

### 飞机

位于wcr-rules-aircrafts.ini

---

[ID] F-形象 P-建造要求 W1-主武器 W2-副武器 WD-死亡武器 N-备注

---



### 建筑

位于wcr-rules-buildings.ini

---

[ID] F-形象 P-建造要求 W1-主武器 W2-副武器 WD-死亡武器 E-耗电 N-备注

---
公共：
- 山寨钻油井[vaBShanzhaiOilD] F-科技钻油井[CAOILD] P-PROC W1- W2- WD-OilExplosion E-50 N-抢到中立的山寨钻油井会获得2000，钱增加速度为30/100，被毁不留残渣. 

- 豪华飞机场[vaBLuxAirport] F-CALA05 P-TECH W1- W2- WD- E-100 N-后期建造的，超级武器：超级伞兵团，带雷达

盟军：
- 尖碑实验室[vaBObelisk] F-华盛顿纪念碑[CAWSH12] P-盟军科技中心[GATECH] W1-无 W2- WD-无 E-200 N-限造1, 步兵进入后升级
- 粒子对撞炮[vaBMolColCannon]：F-巨炮[GTGCAN] P-尖碑实验室 W1-粒子对撞炮[vaWMolColCannon] W2- WD-中型爆炸 E-200 N-限造1，范围255，冷却1分钟，伪超级武器
- 光棱防空塔[vaBAAPrismTower] F-光棱塔[ATESLA]（以爱国者飞弹[NASAM]为模板） P-尖碑实验室 W1-防空光棱[vaWAAPrism] W2- WD- E-150
- 玛雅金字塔2[vaBMayanPyramid] F-玛雅金字塔[CAMEX01] P-尖碑实验室 W1-玛雅光棱[vaWMayanPrism] W2- WD-无 E-150 N-
- 科技防御屋[vaBTechDefHouse] F-爱因斯坦实验室[CALAB] P-盟军科技中心 W1- W2- WD- E-100 N-驻兵20, 大裂缝产生器

苏联：
- 红堡实验室[vaBRedFort] F-圣巴索大教堂[CARUS01] P-苏联实验室组[SOVTECH] W1-无 W2- WD-无 E-200 N-限造1，复制中心
- 磁暴导能仪[vaBTeslaTeleEmiter] F-水塔[CACHIG06] P-红堡实验室 W1-远距电弧放射器[vaWLRTeslaEmitter] W2- WD-中型能量爆炸 E-200 N-限造1，范围200，冷却1分钟，伪超级武器，充电即增强版本
- 重型防空炮[vaBHeavyFlakAAGun] F-防空炮[NAFLAK] P-红堡实验室 W1-重型防空炮[vaWHeavyFlakAA] W2- WD-无 E-150 N-
- 大型磁暴塔[vaBLGTeslaTower] F-[CARUS02G] P-红堡实验室 W1-大型磁暴[vaWTeslaCoilLG]（有折的那种） W2-大型磁暴（过载）[vaWTeslaCoilLGOP] WD-无 E-150 N-便宜一点，生命值要低一点
- 通讯中心[vaBCommCenter] F-通讯中心[CATECH01] P-苏联作战实验室 W1- W2- WD-无 E-100 N-驻兵20，心灵感应器

厄普西隆：
- 海上回收站[vaBOWGrinder] F-工厂[CAIND01] P-厄普西隆海军船坞[YAYARD] W1-无 W2- WD-无 E-50 N-建在海上
- 心智升华室[vaBMindMutator] F-心灵控制增幅器[NAPSYA] P-厄普西隆潘多拉枢纽[YATECH] W1-无 W2- WD-无 E-200 N-限造1，工业工厂
- 心灵传感机[vaBTelepathy] F-心灵信标[NAPSYB] P-心智升华室 W1-心灵感应控制[vaWTelepathyControl] W2- WD-中型心灵震爆[vaWPsyDetonatorMD] E-200 N-限造1，范围120，冷却1分钟，伪超级武器
- 净空镭射炮[vaBSCLaserCannon] F-雕像[CAEURO05] P-心智升华室 W1-净空镭射炮[vaWSkyClearLaserCannon] W2- WD-无 E-150 N-占4格，贵一点，生命值要高一点
- 尤里雕像2[vaBYuriStatue] F-尤里雕像[CAEAST02] P-心智升华室 W1-爆炸激光炮[vaWExplLaserCannon] (有点像光棱坦克) W2- WD-无 E-150 N-
- 防御大楼[vaBDefScraper] F-芝加哥协会大楼[CACHIG04] P-厄普西隆潘多拉枢纽 W1- W2- WD-无 E-100 N-驻兵20，隐形，给周围单位隐形

焚风：
- 飓风研究室[vaBCycloneLab] F-考古学博物馆[CABIOS] P-焚风扩展模组-组[FOETECH] W1-无 W2- WD-无 E--200 N-3本科技实验室，大电厂+大油井

- 能量方尖碑[vaBEnergyObelisk] F-方尖碑[CAMONU] P-飓风研究室[vaBCycloneLab] W1-无 W2- WD-无 E-200 N-3级防御-地

- 声爆防空钟[vaBSBurstAABell] F-沙皇大钟[CATSAR] P-飓风研究室[vaBCycloneLab] W1-无 W2- WD-无 E-200 N-3级防御-空

- 超算庇护所[vaBSCompShelter] F-金川实验室[CAKANE01] P-焚风扩展模组-组[FOETECH] W1-无 W2- WD-无 E-200 N-大型驻兵建筑

- 暴风聚能塔[vaBTempestTower] F-东京塔[CATOKY] P-飓风研究室[vaBCycloneLab] W1-无 W2- WD-中型能量爆炸 E-200 N-伪超武

### 武器

位于wcr-rules-weapons.ini

### 弹头

位于wcr-rules-warheads.ini

### 超级武器

---

[ID] P-要求建筑 D-冷却分钟 C-花费 N-备注

---

- 超级伞兵团[vaESuperParaDropInf] P-豪华飞机场[vaBLuxAirport] 或 豪华舱升级模组[vaBLuxUpgrade]  D-10 C-2000 N-伞兵类型和数目如下：
  - 盟军：重装精英[vaIHAElite]x2、王牌特工[vaISuperAgent]x1、伽马猴[vaIGammaApe]x3、海豹突击队[GHOST]x3、工程师[ENGINEER]x2、间谍[SPY]x3、盟军大兵[E1]x6
  - 苏联：无辜小平民[vaIWuGuCiv]x3、磁暴追猎者[vaIEShockStalker]x2、伞兵终结者[vaIParaTerminator]x2、辐射根除者[DESOR]（中国） 或 辐射工兵[DESO]（其他苏联）x3、工程师[SENGINEER]x2、破坏者[SBTR]x3、苏联动员兵[E2]x8
  - 厄普西隆：夜魔[vaINoctevo]x2、异场武士[vaIAlienWarrior]x1、怨灵[vaIEvlSpirit]x2、心灵精英[YURIPR] （心灵军团）或心灵专家[YURI]（其他厄普西隆）x5、工程师[YENGINEER]x2、渗透者[INTRUDER]x3、厄普西隆新兵[INIT]x5
  - 焚风：光棱兵[vaIPrismS]x2、坦途行者[vaIRoamer]x2、凶凶熊[vaIXiongxiongBear]x5、同步忍者[SYNC_N]（狂鲨先锋）或 气压球晋升者[ZORB_N]（科洛尼亚侧翼）或 天神克星[BANE_N]（最后堡垒）x3、工程师[FENGINEER]x2、千里眼机器人[CLAIR]x3、铁骑兵[KNIGHT]x6


### 全局调整

位于wcR-rules-adjustment.ini

- 尖碑实验室、红堡实验室、心智升华室和飓风研究室是AI可建造的实验室
- 即使满足科技树上所有建造条件，其他国家仍然无法建造本国实验室。但是其他国家可以建造原形车，展开成对应实验室
  - 原型车是原建筑的3倍价格，生命值0.75倍
  - 盟军：科技中心原型车
  - 苏联：苏联山寨实验室（像宫殿但没有任何附属技能）原型车
  - 厄普西隆：潘多拉枢纽原型车，非厄普西隆军国家继续建造空白兼容组件以和下一级科技接壤。
  - 焚风：
    - 在**穿云尖塔**上继续建造空白兼容扩展，从而和下一级科技接壤。
    - （或）非焚风反抗军国家在宝箱中捡到穿云尖塔废弃原型，展开后建造废弃兼容扩展，从而和下一级科技接壤。废弃兼容扩展没有其他建造前提,可以展开后直接建造。
- 建造场的生命值是5000，建造场、基地车造价是5000
- 基地车不能被控制（但是主基地可以），这是为了避免中立单位控制基地车又想展开造成的游戏崩溃。
- 基地车可以被抢占 （[Ares文档](http://ares-developers.github.io/Ares-docs/new/hijackers.html)）
- 二级基地防御（即光棱塔、爱国者飞弹、磁暴线圈、高射炮、地狱热能塔、加特林机炮、轨道炮塔、防空鸟巢）生命值有调整
- 二级基地防御可以回收成对应建造车
- 二级基地防御的建造条件是：
  - 拥有任意建造厂+ 特定的**RADAR类**(对于二级防空设施：**Barracks类**)的建筑（例如：盟军建造厂+**苏联空军基地**=>磁暴线圈）
  - （或）拥有 特定的**建造厂**+任意RADAR类建筑（例如：**厄普西隆建造场**+盟军空军指挥部=>地狱热能塔）
- 1阶英雄（即谭雅、沃尔科夫、天秤 等等）的生命值提高
- 1阶英雄限造数为2
- 1阶英雄可以反隐
- 磁暴步兵、海豹部队、辐射工兵、狂兽人 可以进入建筑，会给他们定义全新的驻防武器。
- 运输机是不能击落的（生命值很高）
- 箱子最少10个最多255个
- 伞兵要电才肯投
- 造兵列表最多可以点到99个
- 建造速度加快到0.5
- 经验值分配调整（[Ares文档](http://ares-developers.github.io/Ares-docs/new/customizableveterancy.html)）
  - 乘客击杀敌军获得经验的25%归乘客获得，75%归载具获得。当载具满级时100%由乘客获得。
    - 斯特瑞克步兵战车[FV]
    - 执政官装甲步兵车[AMC]
    - 长剑步兵装甲[TENGU]
    - 玄武战斗要塞[BFRT]
    - 灾厄坦克[APOC]
    - 豺狼突击载具[JACKAL]
  - 所召唤单位击杀敌军获得经验的一半将分享给主人。
    - 伯劳防空鸟巢[FAGUAR]
    - 冰雹平台[VCARR]
    - 驱逐舰[DEST]
    - 航空母舰[CARRIER]
    - 风神翼龙[QUETZ]
    - 利维坦母舰[LEVI]
  - 所控制单位击杀敌军获得经验的75%将分享给控制者。
    - 心灵专家[YURI]
    - 心灵精英[YURIPR]
    - 心灵之主[MIND]
    - 心灵控制塔[YAPSYT]
- 以下单位升级为两栖单位
  - 工程师
  - 狂兽人
  - 间谍
  - 破坏者
  - 渗透者
- 船厂可以占领，可以被间谍渗透
- 空指部类建筑可以被间谍渗透（黑雷达 + 敌方视野 + 空军升级）
  - 空军指挥部[GAAIRC]
  - 空军基地[NAAIR]
  - 停机坪[YAAIRF]
  - 网络核心[FACYBR]
- 科技机场可以建造 豪华舱模组 以获得 超级伞兵团
- 被间谍入侵 三级经济建筑（即 矿石提纯器、工业工厂、克隆缸、资源再生室） 后会损失100%的资金。
- 以下海军不保护司机，允许抢夺
  - 旅行者运输艇[LCRF]
  - 驱逐舰[DEST]
  - 神盾巡洋舰[AEGIS]
  - 野牛运输艇[SAPC]
  - 台风攻击潜艇[SUB]
  - 海狼护卫艇[SWLF]
  - 神舟运输艇[YHVR]
  - 食人鱼迷你潜艇[SLED]
  - 战龟运输艇[SEAT]
  - 剑鱼护卫舰[SWORD]
  - 扁鲨迷幻潜艇[SHARK]
  - 魔鬼鱼无人防空舰[MANTA]
- 基洛夫击毁不会坠落。因为这里Ares的Bug会导致IE


