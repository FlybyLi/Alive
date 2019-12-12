import BulletFactory, { BulletType } from "../bullet/bulletFactory"

const {ccclass, property} = cc._decorator

@ccclass
export class BulletBase extends cc.Component {

    /** 移动方向 */
    moveDir: cc.Vec2 = new cc.Vec2(0, 0)
    /** 移动速度 */
    moveSpeed: number = 0
    /** 标签 */
    tag: BulletType | undefined = undefined
    /** 子弹工厂 */
    bulletFactory: BulletFactory | undefined = undefined

    reuse (bulletFactory: BulletFactory, dirX: number, dirY: number, speed: number, tag: BulletType): void {
        this.bulletFactory = bulletFactory
        this.setDir(dirX, dirY)
        this.setSpeed(speed)
        this.setTag(tag)
    }

    unuse (): void {
        // console.log('回收成功')
    }

    /** 碰撞后回收子弹 */
    onCollisionEnter (other: cc.Collider, self: cc.Collider): void {
        console.log('碰撞')
    }

    setSpeed (speed: number): void {
        this.moveSpeed = speed
    }

    setDir (dirX: number, dirY: number): void {
        this.moveDir.x = dirX
        this.moveDir.y = dirY
    }

    setTag (tag: BulletType): void {
        this.tag = tag
    }

    getTag (): BulletType {
        return this.tag
    }

    update (dt: number): void {
        if (this.moveSpeed === 0) return
        if (this.moveDir.x !== 0) {
            this.node.x += this.moveDir.x * this.moveSpeed
        }
        if (this.moveDir.y !== 0) {
            this.node.y += this.moveDir.y * this.moveSpeed
        }
        /** 边界回收 */
        if (Math.abs(this.node.x) > 360 || Math.abs(this.node.y) > 640) {
            console.log('回收')
            this.bulletFactory.bulletPools[this.getTag()].put(this.node)
        }
    }

}