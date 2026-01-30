import ScrollVelocity from './ScrollVelocity';

const EmergencyCall = () => {
    return (
        <ScrollVelocity
            texts={['TRANSFORM YOUR HOME', 'CALL 954-692-4947']}
            velocity={80}
            className="text-white font-montserrat"
        />
    );
};

export default EmergencyCall;
