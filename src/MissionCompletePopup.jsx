export default function MissionCompletePopup() {
    return (
      <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-white text-black p-6 rounded-lg shadow-lg text-center">
          <h2 className="text-2xl font-bold">Mission Completed!</h2>
          <p>You've earned coins! Moving to the next level...</p>
        </div>
      </div>
    );
  }
  