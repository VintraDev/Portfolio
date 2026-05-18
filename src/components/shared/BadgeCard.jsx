function BadgeCard({ item, styles = 'grid-cols-3' }) {
  return (
    <div
      className={`w-full grid ${styles} gap-4 items-center justify-center p-4`}
    >
      {item.map((item, index) => {
        return (
          <div
            key={index}
            className="size-full p-4 border flex flex-col items-center justify-center shadow-[0_0px_8px_rgba(0,0,0,0.2)] hover:shadow-sm transition border-(--tertiary-color) rounded-lg bg-linear-to-br from-bg-white/20 to-[#999999]/20 backdrop-blur-sm"
          >
            <img src={item.icon} alt={item.label} />
            <span className="font-work-sans text-lg font-medium text-(--tertiary-color)">
              {item.label}
            </span>
          </div>
        );
      })}
    </div>
  );
}

export default BadgeCard;
