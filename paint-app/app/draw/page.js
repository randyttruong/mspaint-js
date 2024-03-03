'use client'
import { useEffect } from 'react';

export default function Draw() {
    useEffect(() => {
        const drawOnCanvas = () => {
            const canvas = document.getElementById('myCanvas');
            const ctx = canvas.getContext('2d');
            let isDrawing = false;

            // Drawing code here
            function startPosition(e) {
                isDrawing = true;
                draw(e);
            }
            function endPosition(e) {
                isDrawing = false;
                ctx.beginPath();
            }

            function draw(e) {
                if (!isDrawing) return;
                ctx.lineWidth = 5;
                ctx.lineCap = 'round';
                ctx.strokeStyle = 'rgb(0, 0, 0)';
                ctx.lineTo((e.clientX -(canvas.offsetLeft ))/2, (e.clientY - (canvas.offsetTop))/2);

                ctx.stroke();
                ctx.beginPath();
                ctx.moveTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);

            }

            canvas.addEventListener('mousedown', startPosition);
            canvas.addEventListener('mouseup', endPosition);
            canvas.addEventListener('mousemove', draw);
        };

        // Check if running on the client side before executing drawing code
        if (typeof window !== 'undefined') {
            drawOnCanvas();
        }
    }, []);

    return (
        <div>
            <header>
                {/* Add header content if needed */}
            </header>
            <canvas id="myCanvas" style={{ border: '1px solid #000000' }}></canvas>
         
        </div>
    );
}
