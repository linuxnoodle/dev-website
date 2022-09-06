import { useEffect, useRef } from 'react';
const UnitCircle = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null)
    const draw = (ctx: CanvasRenderingContext2D, frameCount: number) => {
        ctx.canvas.width  = window.innerWidth;
        ctx.canvas.height = window.innerHeight;

        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)

        // draw circle
        ctx.strokeStyle = '#326ba8'
        ctx.lineWidth = 5
        ctx.beginPath()
        ctx.arc(ctx.canvas.width/2, ctx.canvas.height/2, 250, 0, 2 * Math.PI)
        ctx.stroke()

        // draw lines making a grid
        ctx.strokeStyle = '#326ba8'
        ctx.lineWidth = 1
        for (let i = 0; i < Math.round(ctx.canvas.width / 100) + 1; ++i) {
            ctx.beginPath()
            // yes, i did draw a positive and negative line so i don't have to worry about aligning with the center
            // no, i don't care
            ctx.moveTo(ctx.canvas.width / 2 + 50*i, 0)
            ctx.lineTo(ctx.canvas.width / 2 + 50*i, ctx.canvas.height)
            ctx.moveTo(ctx.canvas.width / 2 - 50*i, 0)
            ctx.lineTo(ctx.canvas.width / 2 - 50*i, ctx.canvas.height)
            ctx.stroke()
        }
        for (let i = 0; i < Math.round(ctx.canvas.height / 100) + 2; ++i) {
            ctx.beginPath()
            ctx.moveTo(0, ctx.canvas.height / 2 + 50*i)
            ctx.lineTo(ctx.canvas.width, ctx.canvas.height / 2 + 50*i)
            ctx.moveTo(0, ctx.canvas.height / 2 - 50*i)
            ctx.lineTo(ctx.canvas.width, ctx.canvas.height / 2 - 50*i)
            ctx.stroke()
        }

        // draw axes
        ctx.strokeStyle = '#a0a0a0';
        ctx.lineWidth = 2
        ctx.moveTo(ctx.canvas.width/2, 0)
        ctx.lineTo(ctx.canvas.width/2, ctx.canvas.height)
        ctx.moveTo(0, ctx.canvas.height/2)
        ctx.lineTo(ctx.canvas.width, ctx.canvas.height/2)
        ctx.stroke()

        // draw rotating line segment
        ctx.strokeStyle = '#a83232'
        ctx.lineWidth = 3
        ctx.beginPath()
        ctx.moveTo(ctx.canvas.width/2, ctx.canvas.height/2)
        ctx.lineTo(ctx.canvas.width/2 + 250 * Math.cos(frameCount * 0.01), ctx.canvas.height/2 + 250 * Math.sin(frameCount * 0.01))

        // end of arrow
        ctx.lineTo(ctx.canvas.width/2 + 250 * Math.cos(frameCount * 0.01) - 10 * Math.cos(frameCount * 0.01 + Math.PI/2), ctx.canvas.height/2 + 250 * Math.sin(frameCount * 0.01) - 10 * Math.sin(frameCount * 0.01 + Math.PI/2))
        ctx.moveTo(ctx.canvas.width/2 + 250 * Math.cos(frameCount * 0.01), ctx.canvas.height/2 + 250 * Math.sin(frameCount * 0.01))
        ctx.lineTo(ctx.canvas.width/2 + 250 * Math.cos(frameCount * 0.01) - 10 * Math.cos(frameCount * 0.01 - Math.PI/2), ctx.canvas.height/2 + 250 * Math.sin(frameCount * 0.01) - 10 * Math.sin(frameCount * 0.01 - Math.PI/2))
        ctx.stroke()

        // draw text
        ctx.font = '30px Computer Modern'
        ctx.fillStyle = '#a83232'
        ctx.fillText('i', ctx.canvas.width/2 - 20, ctx.canvas.height/2 - 260)
        ctx.fillText('1', ctx.canvas.width/2 + 260, ctx.canvas.height/2 + 30)
        ctx.fillText('-i', ctx.canvas.width/2 - 30, ctx.canvas.height/2 + 290)
        ctx.fillText('-1', ctx.canvas.width/2 - 285, ctx.canvas.height/2 + 30)
    }
    useEffect(() => {
        const canvas = canvasRef.current
        const context = canvas?.getContext('2d')
        let frameCount = 0
        let animationFrameId: number
        //Our draw came here
        const render = () => {
            frameCount++
            draw(context!, frameCount)
            animationFrameId = window.requestAnimationFrame(render)
        }
        render()
        return () => {
            window.cancelAnimationFrame(animationFrameId)
        }
    });
    return <canvas ref={canvasRef}/>
}

export default UnitCircle
