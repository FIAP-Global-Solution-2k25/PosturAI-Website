import Spline from '@splinetool/react-spline';

export default function Robot() {
  return (
    <div className="w-full h-full">
    <Spline scene="https://prod.spline.design/mHtZv0PHq2YJRqfO/scene.splinecode" 
        style={{
          width: '100%',
          height: '100%',
          background: 'transparent', }}
      />
    </div>
  );
}