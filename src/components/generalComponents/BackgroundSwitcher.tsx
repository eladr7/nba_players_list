import React from "react";

interface BackgroundSwitcherProps {
  isDark: boolean;
  setIsDark: (isDark: boolean) => void;
}

export const BackgroundSwitcher: React.FC<BackgroundSwitcherProps> = ({
  isDark,
  setIsDark,
}) => {
  return (
    <div>
      <label className="mr-2">Background Color:</label>
      <input
        type="radio"
        id="lightMode"
        name="backgroundColor"
        checked={!isDark}
        onChange={() => setIsDark(false)}
      />
      <label className="mx-2" htmlFor="lightMode">
        Light
      </label>
      <input
        type="radio"
        id="darkMode"
        name="backgroundColor"
        checked={isDark}
        onChange={() => setIsDark(true)}
      />
      <label className="mx-2" htmlFor="darkMode">
        Dark
      </label>
    </div>
  );
};
