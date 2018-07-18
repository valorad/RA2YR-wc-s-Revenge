# wcR plan for vanilla Yuri's Revenge
“wc的复仇” 是室长版的后续作品，相较室长版，“wc的复仇”在保持娱乐性的同时尽最大可能进行了平衡。wcR的设计风格是“嵌入”型的，对于原版游戏可以直接运行，而第三方mod可以直接将代码插入。

## Ares调整

1. 由于依赖Ares平台，部分地方需要调整才能让Ares正常运行。
（详情请查看[Ares文档](http://ares-developers.github.io/Ares-docs/notes.html#required-changes-for-mods-using-ares)）

``` ini
; rulesmd.ini
[Animations]
2000=APOCEXP


; artmd.ini
[TELE]
SecondaryFireFLH=85,0,130

```

    注：这里暂时没有对疯狂伊文炸弹做调整，因为修复bug涉及修改bombcurs.shp，删除最后一帧并重构localmd.mix，很复杂。而且实测发现在快速游戏（速度5）时，最后一帧一闪而过几乎看不见，再加上我懒，所以暂时不做修复。

2. Ares的一大特性是代码分离，因此我们将各部分的ini分离，让代码更有条理，并且进一步加强了可移植性。

缺点是目前不管是官方（MO）的地图编辑器，还是原版Final Alert都无法如此读取拓展ini中的单位信息，对此我会准备一个专给地图编辑器读取的特制rulesmd.ini。

``` ini
; rulesmd.ini
[#include]
5=wcr-rules-animations.ini
10=wcr-rules-warheads.ini
20=wcr-rules-projectiles.ini
30=wcr-rules-weapons.ini
40=wcr-rules-buildings.ini
50=wcr-rules-infantries.ini
60=wcr-rules-vehicles.ini
70=wcr-rules-aircrafts.ini

100=wcr-rules-adjustments.ini


; artmd.ini
[#include]
10=wcr-art-animations.ini
20=wcr-art-buildings.ini
30=wcr-art-infantries.ini
40=wcr-art-vehicles.ini

100=wcr-art-adjustments.ini


```

## Rules

尖碑实验室、红堡实验室、心智升华室的单位自动回复生命

英雄单位:限造1位，花费较高，自回生命、无法控制、无法碾压

### 步兵

位于wcr-rules-infantries.ini

---

[ID] F-形象 P-建造要求 W1-主武器 W2-副武器 WO-驻防武器 WFV-多功能车武器 WD-死亡武器 N-备注

---

盟军：
- 光棱兵[vaIPrismS] F-超时空军团兵[CLEG] P-盟军作战实验室[GATECH] W1-便携光棱柱（对空又对地）[vaWPortablePrism] W2-  WO-光棱炮[vaWPrismCannon] MFV-光棱炮[vaWPrismCannon] WD-小型能量爆炸[vaWEnergyExplSM] N-
- 重装精英[vaIHAElite] F-重装大兵[GGI] P-盟军作战实验室[GATECH] W1-M60Plus机枪[vaWM60Plus] W2-RPG[vaWRPG] WO-RPG[vaWRPG] WFV-RPG[vaWRPG] WD-小型爆炸[vaWExplSM] N-护甲很厚，移动慢，无法碾压
- （飞行兵）阿瑞斯之鹰[vaIAresEagle] F-火箭飞行兵[JUMPJET] P-尖碑实验室[vaBObelisk] W1-便携巨炮[vaWPortCannonLG] W2-航空炮[vaWA20mm] WO- WFV- WD-中型爆炸[vaWExplMD] N-重甲，飞行单位，飞行较慢
- 王牌特工[vaISuperAgent] F-间谍[SPY] P-尖碑实验室[vaBObelisk] W1- W2- WO- WFV- WD-小型能量爆炸[vaWEnergyExplSM] N-不能被碾压，不能升级，视野很大，隐形
- 伽马猴[vaIGammaApe] F-猴子[JOSH] P-盟军作战实验室 W1- W2- WO- WFV- WD- N-没有武器，可以抢劫敌方坦克，不会被主动攻击
- ============ 英雄 ============
- 史蒂夫[vaISteve] F-海豹部队[GHOST] P-尖碑实验室[vaBObelisk] W1-激光机枪[vaWLaserGatling] W2- WO- MFV-激光机枪[vaWLaserGatling] WD-大型能量爆炸[vaWEnergyExplLG] N-移动迅速，可以对空也可以对地
- 戴斯蒙[vaIDesmond] F-终结者[ARND] N-超远程的狙击手，攻速很慢，射程很远，隐形，对地对空

苏联：
- 无辜小平民[vaIWuGuCiv] F-平民[CIV2] P-苏联作战实验室[NATECH] W1-伊文炸药[IvanBomber] W2-  WO- MFV-迷你核弹[CRNuke] WD-伊文炸药[IvanBomber] N-武器和疯狂伊文完全相同，不会被主动攻击，视野很大
- 磁暴追猎者[vaIEShockStalker] F-磁暴步兵[SHK] P-苏联作战实验室[NATECH] W1-改良磁暴枪[vaWAdvEShooter] W2-(充电枪)  WO- MFV-改良磁暴枪[vaWAdvEShooter] WD-小型能量爆炸[vaWEnergyExplSM] N-可以对空又对地，无法碾压，重甲却有较快移动速度
- （飞行兵）战熊飞行兵[vaIBatBearJet] F-登月火箭员[LUNR] P-红堡实验室[vaBRedFort] W1-巨型电弧炮[vaWTslArcCannon] W2-  WO- MFV- WD-中型能量爆炸[vaWEnergyExplMD] N-飞行单位
- 伞兵终结者[vaIParaTerminator] F-防空步兵[FLAKT] P-苏联作战实验室[NATECH] W1-迫击炮[vaWMortar] W2-轻型防空炮（对空）[vaWLightFlakAA]  WO- MFV- WD-小型爆炸[vaWExplSM] N-重甲，无法碾压，移动慢，射程较远，范围伤害，对坦克伤害大
- 渗透伊文[vaIInfilIvan] F-恐怖分子[TERROR] P-苏联作战实验室 W1-[vaWIvanTerrorBomber] W2- WO- MFV-伊文自爆[vaWIvanTerrorBomber] N-隐形，武器是伊文炸药自爆，作为间谍渗透敌方建筑，不可以伪装
- ============ 英雄 ============
- 欧列格[vaIOleg] F-辐射工兵[DESO] P-红堡实验室[vaBRedFort] W1-剧毒放射弹[vaWDesoChem] W2-剧毒震爆[vaWDesoEruptor]  WO- MFV- WD-大型核爆[NukePayload] N-重甲，无法碾压，移动慢，可以对空对地
- 卡斯力[vaIKhaslik] F-心灵突击队[PTROOP] P-红堡实验室[vaBRedFort] N-隐刀，对地对空

尤里：
- （飞行兵）心灵主宰[vaIMindDominator] F-尤里X[YURIPR] P-心智升华室[vaBMindMutator] W1-心灵控制【全向】[vaWMulCtrlAAG] W2-精神鞭笞【全向】[vaWPsyTortureAAG] WO- MFV- WD-中型心灵震爆[vaWPsyDetonatorMD] N-飞行单位，最多控制3个，移动慢
- 夜魔[vaINoctevo] F-狂兽人[BRUTE] P-雷达类 W1-AA N-隐形单位，视野大，只能对空，不主动攻击别人，驻防和IFV武器和狂兽人一样
- 异场武士[vaIAlienWarrior] F-平民[CIVA] P-尤里作战实验室[YATECH] W1-强力拳击[vaWOvPunch] W2-磁电拉举[MagneShake] WO- MFV- WD-中型心灵震爆[vaWPsyDetonatorMD] N-类似对付步兵和建筑时近战，对付载具时抬升。可以作为间谍渗透敌方建筑，不能伪装。
- 怨灵[vaIEvlSpirit] F-病毒狙击手[VIRUS] P-尤里作战实验室[YATECH] W1-病毒枪V-II[vaWVirusvII] W2-病毒枪V-II（反载具）[vaWVirusvIIAV] WO- MFV- WD-毒雾[vaWVirusGas] N-对付步兵用快速的病毒狙击枪，而对付载具和建筑的时候用反载具的。可以空中 地面
- 凶凶熊[vaIXiongxiongBear] F-北极熊[POLARB] P- N-移动迅速，只能尤里建造，对步兵伤害非常高。
- ============ 英雄 ============
- 哥兰图[vaIGranto] F-狂兽人[BRUTE] P-心智升华室[vaBMindMutator] W1-小型心灵震爆[vaWPsyDetonatorSM] W2- WO-小型心灵震爆[vaWPsyDetonatorSM] MFV-小型心灵震爆[vaWPsyDetonatorSM] WD-大型心灵震爆[vaWPsyDetonatorLG] N-对空 对地
- （飞行兵）芬雷[vaIFinley]  F-木乃伊[MUMY] P-心智升华室[vaBMindMutator] N-发射病毒炮弹，炮弹高爆分裂，步兵死亡会变成毒雾

### 战车（包括战车工厂飞行器与海军）

位于wcr-rules-vehicles.ini

---

[ID] F-形象 P-建造要求 W1-主武器 W2-副武器 WD-死亡武器 Dp-展开为 N-备注

---

盟军：
- 杜莎大导弹[vaVDusaMissile] F-战斗要塞[战斗要塞] P-盟军作战实验室 W1-美杜莎飞弹[vaWMedusa] W2- WD-小型爆炸[vaWExplSM] N- 专业对空导弹车，只能对空，移动速度慢
- 豪华飞车[vaVLimoRaceCar] F-豪华轿车[LIMO] P-盟军战车工厂[GAWEAP] W1-无 W2-无 WD-无 N-侦察车，无武器，不主动被攻击，视野大
- 太空轨道快递[vaVSpDelivery] F-坦克杀手[TNKD] P-尖碑实验室 W1-远程中子炮[vaWLRNeutrCannon] W2-无 WD-中型能量爆炸  N-远程超时空“冻结”炮攻击车，射程与巨炮相同，不能对空
- 霸屏干扰车 F-宣传车[PROPA] P-盟军作战实验室 （骚扰型的战车，EMP武器，没有伤害，指哪儿打哪儿）
- 光棱塔设计车[vaVPrismTowerMCV] F-盟军基地车[AMCV] Dp-(光棱塔) P-（类似二级基地防御的建造条件） W1-简易光棱[vaWSimplePrism] W2- WD-小型能量爆炸 N-生命值为光棱塔的80%
- 飞弹爱国鼓舞车[vaVPatMissileMCV] F-盟军基地车[AMCV] Dp-(爱国者飞弹) P-（类似二级基地防御的建造条件） W1-[vaWHoverMissileAG] W2- WD-小型爆炸 N-生命值为爱国者飞弹的80%，武器与多功能火箭车类似，不能防空
- 防空光棱建造车[vaVAAPrismTMCV] F-盟军基地车[AMCV] Dp-防空光棱塔[vaBAAPrismTower] P-尖碑实验室 W1-无 W2- WD-无 N-生命值为防空光棱塔的80%，没有武器
- 玛雅金字塔重建车[vaVMayanPrmMCV] F-盟军基地车[AMCV] Dp-(玛雅金字塔2) P-尖碑实验室 W1-简易光棱[vaWSimplePrism] W2- WD-中型能量爆炸 N-生命值为玛雅金字塔2的80%
- 科技防御屋修建车 [vaVTechDHouseMCV] F-盟军基地车[AMCV] Dp-(科技防御屋) P-尖碑实验室 W1-无 W2- WD-小型爆炸 N- 生命值为科技防御屋的80%
- （海军）核动力驱逐舰[vaVNukePoweredDest] F-驱逐舰[DEST] P-盟军造船厂[GAYARD]，尖碑实验室 W1-集聚舰炮[vaWConCannon] (一次发3颗的155mm)，有范围伤害 W2-[ASWLauncher] WD-核弹[NukePayload] N-
- （海军）乌贼王[vaVKingSquid] F-巨形乌贼[SQD] P-尖碑实验室 W1-[SquidGrab] W2-[VirtualScanner] WD-小型心灵震爆 N-生命护甲很高的但移动略慢的巨形乌贼
- （海军）F-海蝎[HYD]（干扰碰碰船，EMP武器有伤害，干扰时间长，冲撞后自爆，自爆效果类似于超时空传走）
- ============ 英雄 ============
- (飞行物)（光棱直升机）F-武装直升机[SCHP] P-尖碑实验室 W1-激光机枪 W2-小型粒子对撞炮[vaWMolColCannonSM] WD-大型能量爆炸[vaWEnergyExplLG]

苏联：
- 迅雷蜘蛛[vaVThunderSpider] F-恐怖机器人[DRON] P-苏联作战实验室[NATECH] W1-超级寄生[vaWSuperDroneJump] W2-[VirtualScanner] WD-无 N-速度极快的恐怖机器人,可以寄生空中单位
- 低调的挖掘机[vaVLowKeyExcavator] F-挖掘机[CONA] P-苏联战车工厂[NAWEAP] W1-[20mmRapid] W2- WD- V-20 N-侦查车，武器与武装采矿车[HARV]相同，不主动攻击，不主动被攻击 视野大 RadarInvisible=yes
- 菜油榴弹炮 [vaVCaiyouHowitzer] F-榴弹炮[HOWI] P-红堡实验室 W1-远程榴弹[vaWLRHowitzer] W2- WD-中型爆炸 N-远程火力加强榴弹炮
- 辐照防空台 F-卡车[TRUCKA] P-苏联作战实验室[NATECH]（辐射工兵的炮，只能对空，射速快，移动中速）
- 磁暴线圈组装车[vaVTeslaCoilMCV] F-苏联基地车[SMCV] Dp-(磁暴线圈) P-（类似二级基地防御的建造条件） W1-简易磁暴枪[vaWSimpleTesla] W2- WD-小型能量爆炸 N-可展开为磁暴线圈，生命值为磁暴线圈的80%
- 防空炮组装车[vaVFlakAACannonMCV] F-苏联基地车[SMCV] C-防空炮[NAFLAK] P-（类似二级基地防御的建造条件） W1-防空弹[FlakTrackGun] W2- WD-小型爆炸 V-8 N- 生命值为防空炮的80%，武器与防空履带车[HTK]的主武器类似，不能防空
- 重型防空炮设计车[vaVFlakHeavyAAGunMCV] F-苏联基地车[SMCV] Dp-(重型防空炮) P-红堡实验室 W1-无 W2- WD-无 N-生命值为重型防空炮的80%
- 大型磁暴塔组建车[vaVLGTeslaTowerMCV] F-苏联基地车[SMCV] Dp-(大型磁暴塔) P-红堡实验室 W1-简易磁暴枪 W2- WD-中型能量爆炸 N-生命值为大型磁暴塔的80%
- 通讯中心组建车[vaVCommCenterMCV] F-苏联基地车[SMCV] Dp-(通讯中心) P-红堡实验室 W1-无 W2- WD-小型爆炸 N-生命值为通讯中心的80%
- (飞行物)克里姆林基洛夫[vaVKremlinKirov] F-基洛夫空艇[ZEP] P-红堡实验室 W1-大型核爆[vaWNukeExplLG] W2- WD-大型核爆[vaWNukeExplLG] N-发动自毁，部署自毁
- (海军)收割者[vaVReaper] F-无畏级战舰[DRED] P-红堡实验室 W1-无畏导弹[vaWOvDredLauncher] W2- WD-核弹[NukePayload] N-移动速度快，护甲高，发射6枚飞弹的无畏级
- (海军)奇异海豚[vaVAmzDolphin] F-海豚[DLPH] P-红堡实验室 W1-快速声波[vaWFastSonicBurst] W2- WD-小型心灵震爆 V-15 N-快速快攻的海豚，（可以浮出水面攻击地面部队？）
- (海军)伏特加战舰 F-宙斯盾巡洋舰[AEGIS]（较远的疯狂伊文的武器）
- ============ 英雄 ============
- 克里姆林天启 F-天启坦克[APOC]   P-红堡实验室 W1-天启炮[] （1级像3级的普通天启炮，3级是炮带菜油榴弹炮效果）W2-天启飞弹[] （1级像爱国者飞弹，3级带菜油榴弹炮效果） N-生命高，移动中速，可以碾压其他坦克

尤里：
- 傻x洲际火箭车[vaVShaChaICRocket] F-V3火箭发射车[V3] P-心智升华室 W1-洲际火箭[vaWICRocket] W2- WD-中型爆炸 N-超远程火箭发射车
- 迷你小巴士[vaVMiniBus] F-巴士[DDBX] P-尤里战车工厂[YAWEAP] W1-无 W2- WD-无 N-中速的侦察车，可以载5人 视野大，不主动被攻击
- 纵火狂[vaVPyromania] F-神经突击车[CAOS] P-尤里作战实验室[YATECH] W1-火枪[vaWFireThrower] W2- WD-小型心灵震爆 N-近程喷火车，可以对空对地
- 病毒狙击车 F-精神控制车[MIND] P-尤里作战实验室[YATECH]（可以对空对地、射速很慢，射程较远，移动慢，生命高）
- 心灵控制塔安装器[vaVMindCTMCV] F-尤里基地车[PCV] Dp-心灵控制塔[YAPSYT] P-（类似二级基地防御的建造条件） W1-心灵控制[MindControl] W2- WD-小型心灵震爆 N-生命值为心灵控制塔的80%
- 盖特机炮安装器[vaVGatAAMCV] F-尤里基地车[PCV] Dp-盖特机炮[YAGGUN] P-（类似二级基地防御的建造条件） W1-[20mmRapid] W2- WD-小型爆炸 N-生命值为盖特机炮的80%
- 净空镭射炮安装器[vaVSCLaserCannonMCV] F-尤里基地车[PCV] Dp-净空镭射炮[vaBSCLaserCannon] P-心智升华室 W1-无 W2- WD-无 N-生命值为净空镭射炮的80%
- 尤里雕像中控车[vaVYuriStatueMCV] F-尤里基地车[PCV] C-尤里雕像II[vaBYuriStatue] P-心智升华室 W1-简易光棱[vaWSimplePrism] W2- WD-中型心灵震爆 N-生命值为尤里雕像II的80%
- 防御大楼中控车[vaVDefScrapperMCV] F-尤里基地车[PCV] C-防御大楼[vaBDefScrapper] P-心智升华室 W1-无 W2- WD-小型爆炸 N-生命值为防御大楼的80%
- （飞行物）泰坦直升机[vaVTitanHeli] F-雌鹿运输直升机[HIND] P-尤里战车工厂[YAWEAP] W1-[BlackHawkCannon] W2- WD-无 N-运16个人支持载具
- （海军）盖特小船[vaVGatVessel] F-[TUG] P-尤里海军船坞[YAYARD] W1-[AGGattling] W2-[AAGattling] WD-无 N-
- （海军）神速雷鸣潜艇[vaVSupBSubmarine] F-雷鸣攻击潜艇[BSUB] P-心智升华室 W1-急速水雷[vaWFastBoomer] W2-(导弹) WD-大型核爆[vaWNukeExplLG] N-快速的潜艇
- (海军)心灵控制船 F-游轮[CRUISE] （和尤里一样，控制3个）
- ============ 英雄 ============
- （飞行物）母舰 F-航空母舰[CARRIER] P-心智升华室 N-可以无限控制建筑、单位，移动慢，（周围单位隐形？）

### 飞机

位于wcr-rules-aircrafts.ini

苏联和尤里阵营需要建造山寨空指部才能建造飞机。

载弹量默认是1

需求(P)默认是空指部或山寨空指部

---

[ID] F-形象 P-建造要求 W1-主武器 W2-副武器 WD-死亡武器 Dp-展开为 N-备注

---

盟军：
- 雄鹰战机[vaATercelFighter] F-黑鹰战机[BEAG] P-盟军作战实验室 W1-缠斗导弹-II[vaWDogfightMissile2] W2- WD-小型爆炸 N-空对空，载弹量3
- ============ 英雄 ============
- 最高打[vaATopDest] F-入侵者战机[ORCA] P-尖碑实验室 W1-战术核飞弹[vaWNukeMissileAG] W2- WD-自爆卡车[Demobomb] N-入侵者战机[ORCA]的效果，落地是核弹，隐形
 
苏联：
- 米格战机[vaAMiGFighter] F-米格战机[BPLN] P- W1-缠斗导弹[vaWDogfightMissile] W2- WD- N-空对空，载弹量5
- 特斯拉无人机[vaATeslaDrone] F-鹗式运输机[ASW] P-苏联作战实验室 W1-磁暴弹[vaWEShockBomb] W2- WD-磁暴弹E[vaWEShockBombE] N-对地一点，1级无片伤，3级有片伤，隐形
- ============ 英雄 ============
- 辐芒轰炸机[vaARadenlight] F-侦察机[SPYP] P-红堡实验室 W1-辐射炸弹[vaWRadBomb] W2- WD-辐射炸弹E[vaWRadBombE] N-弹头爆炸效果类似于欧列格的

尤里：
- 麻烦制造者 F-雷射幽浮[DISK] P- W1-精神突击弹[vaWRiotBomb] W2- WD-精神突击弹[vaWRiotBomb] N-弹头落地后会出发大面积的精神突击效果，隐形，不能升级
- 要塞战机[vaAFortressFighter] F-米格战机[BPLN] P-尤里作战实验室 W1-能量飞弹[vaWEnergyMissile] W2- WD-能量飞弹E[vaWEnergyMissileE] N-对空、对地一点，武器类似能量深球弹，载弹量3
- ============ 英雄 ============
- 混沌降临者[vaAChaosBringer] F-巨型乌贼[SQD] P-心智升华室 W1-混沌飞弹[vaWChaosMissile] W2- WD-混沌飞弹E[vaWChaosMissileE] N-弹头落地后基地爆炸并且步兵变成狂兽人

### 建筑

位于wcr-rules-buildings.ini

---

[ID] F-形象 P-建造要求 W1-主武器 W2-副武器 WD-死亡武器 E-耗电 N-备注

---

公共：
- 山寨钻油井[vaBShanzhaiOilD] F-科技钻油井[CAOILD] P-PROC W1- W2- WD-OilExplosion E-50 N-抢到敌人的山寨钻油井会获得2000，钱增加速度为30/100，被毁不留残渣
- 豪华飞机场[vaBLuxAirport] F-CALA05 P-TECH W1- W2- WD- E-100 N-后期建造的，伞兵，带雷达
- (苏联+尤里)山寨空指部[vaBShanzhaiACH] F-空指部[GAAIRC] N-盟军不能建造，苏联和尤里在建了RADAR后可以建造

盟军：
- 尖碑实验室[vaBObelisk] F-华盛顿纪念碑[CAWSH12] P-盟军作战实验室[GATECH] W1-无 W2- WD-无 E-200 N-限造1, 步兵进入后升级
- 粒子对撞炮[vaBMolColCannon]：F-巨炮[GTGCAN] P-尖碑实验室 W1-粒子对撞炮[vaWMolColCannon] W2- WD-中型爆炸 E-200 N-限造1，范围255，冷却1分钟，伪超级武器
- 光棱防空塔[vaBAAPrismTower] F-光棱塔[ATESLA]（以爱国者飞弹[NASAM]为模板） P-尖碑实验室 W1-防空光棱[vaWAAPrism] W2- WD- E-150
- 玛雅金字塔2[vaBMayanPyramid] F-玛雅金字塔[CAMEX01] P-尖碑实验室 W1-玛雅光棱[vaWMayanPrism] W2- WD-无 E-150 N-
- 科技防御屋[vaBTechDefHouse] F-爱因斯坦实验室[CALAB] P-盟军作战实验室 W1- W2- WD- E-100 N-驻兵20, 大裂缝产生器

苏联：
- 红堡实验室[vaBRedFort] F-圣巴索大教堂[CARUS01] P-苏联作战实验室[NATECH] W1-无 W2- WD-无 E-200 N-限造1，复制中心
- 磁暴导能仪[vaBTeslaTeleEmiter] F-水塔[CACHIG06] P-红堡实验室 W1-远距电弧放射器[vaWLRTeslaEmitter] W2- WD-中型能量爆炸 E-200 N-限造1，范围200，冷却1分钟，伪超级武器，充电即增强版本
- 重型防空炮[vaBHeavyFlakAAGun] F-防空炮[NAFLAK] P-红堡实验室 W1-重型防空炮[vaWHeavyFlakAA] W2- WD-无 E-150 N-
- 大型磁暴塔[vaBLGTeslaTower] F-[CARUS02G] P-红堡实验室 W1-大型磁暴[vaWTeslaCoilLG]（有折的那种） W2-大型磁暴（过载）[vaWTeslaCoilLGOP] WD-无 E-150 N-便宜一点，生命值要低一点
- 通讯中心[vaBCommCenter] F-通讯中心[CATECH01] P-苏联作战实验室 W1- W2- WD-无 E-100 N-驻兵20，心灵感应器

尤里：
- 海上回收站[vaBOWGrinder] F-工厂[CAIND01] P-尤里海军基地[YAYARD] W1-无 W2- WD-无 E-50 N-建在海上
- 心智升华室[vaBMindMutator] F-心灵控制增幅器[NAPSYA] P-尤里作战实验室[YATECH] W1-无 W2- WD-无 E-200 N-限造1，工业工厂
- 心灵传感机[vaBTelepathy] F-心灵信标[NAPSYB] P-心智升华室 W1-心灵感应控制[vaWTelepathyControl] W2- WD-中型心灵震爆[vaWPsyDetonatorMD] E-200 N-限造1，范围120，冷却1分钟，伪超级武器
- 净空镭射炮[vaBSCLaserCannon] F-雕像[CAEURO05] P-心智升华室 W1-净空镭射炮[vaWSkyClearLaserCannon] W2- WD-无 E-150 N-占4格，贵一点，生命值要高一点
- 尤里雕像2[vaBYuriStatue] F-尤里雕像[CAEAST02] P-心智升华室 W1-爆炸激光炮[vaWExplLaserCannon] (有点像光棱坦克) W2- WD-无 E-150 N-
- 防御大楼[vaBDefScraper] F-芝加哥协会大楼[CACHIG04] P-尤里作战实验室 W1- W2- WD-无 E-100 N-驻兵20，隐形，给周围单位隐形

### 武器

位于wcr-rules-weapons.ini

### 弹头

位于wcr-rules-warheads.ini


### 全局调整

位于wcR-rules-adjustment.ini

- 尖碑实验室、红堡实验室和心智升华室是AI可建造的实验室
- 建造场的生命值是3000
- 二级基地防御（即光棱塔、爱国者飞弹、磁暴线圈、防空炮、心灵控制塔、盖特机炮）生命值有调整
- 二级基地防御可以回收成对应建造车
- 二级基地防御中的防空设施可以反隐
- 二级基地防御可以升级，会给它们定义全新的升级武器
- 二级基地防御的建造条件是：
  - 拥有任意建造厂+ **特定** 的RADAR类的建筑（例如：盟军建造厂+苏联雷达=>磁暴线圈）
  - （或）拥有 **特定** 的建造厂+任意RADAR类建筑（例如：尤里建造厂+空指部=>心灵控制塔）
- 谭雅、boris、yuriX的生命值提高
- 基地车不能被控制（但是主基地可以），这是为了避免中立单位控制基地车又想展开造成的游戏崩溃。
- 基地车不可以被抢占 [Ares文档](http://ares-developers.github.io/Ares-docs/new/hijackers.html)
- 磁暴步兵、防空步兵、海豹部队、辐射工兵、重装大兵、狂兽人 可以进入建筑，会给他们定义全新的驻防武器。
- 工程师可以去开中立坦克
- 基洛夫空艇是可以被蜘蛛钻的
- 运输机是不能击落的（生命值很高）
- 箱子最少10个最多255个
- 伞兵要电才肯投
- 伞兵的时间和兵种有调整
- 造兵列表最多可以点到99个
- 建造速度加快到0.5
- 多人游戏：
  - 钱： 10000-50000
  - 兵： 10-20
- 苏联和尤里不能建造空指部，只能建造山寨空指部。苏联和尤里想要造入侵者战机、雄鹰战机等需要再占领以下任意一座盟军建筑：
  - 盟军矿石精炼厂
  - 盟军兵营
  - 盟军战车工厂
  - 盟军作战实验室
  - 尖碑实验室

  ... 或者盟军空指部也行。盟军想建造苏联、尤里的一般战机也同理。
- 经验值分配调整（[Ares文档](http://ares-developers.github.io/Ares-docs/new/customizableveterancy.html)）
  - 乘客击杀敌军获得经验的25%归乘客获得，75%归载具获得。当载具满级时100%由乘客获得。
    - 多功能步兵车
    - 战斗要塞
  - 所召唤单位击杀敌军获得经验的一半将分享给主人。
    - 驱逐舰
    - 航空母舰
  - 所控制单位击杀敌军获得经验的75%将分享给控制者。
    - 尤里
    - 精神控制车
    - 尤里X
    - 心灵控制塔
- 狗可以升级、武器改为狗咬（不扑了，跟MO一样）
- 尤里、心灵突击队、心灵控制塔、心灵感应器不能够反间谍，尤里反间谍单位为凶凶熊。

### 其他
- 各国家的特色单位会给予增强。
  - 美国：超级伞兵团
  - 尤里：凶凶熊

## AI
