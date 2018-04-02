const SkillLine = ({ draw, isCurrent, lineLength }) =>
  <div className={`Skill_line transitions ${isCurrent ? '' : 'hide'}`}>
    <style jsx>{`
      @media screen and (max-width: 1000px) {
        .Skill_line {
          display: none;
        }
      }
      .Skill_line {
        position: absolute;
        top: 20px;
        left : 42px;
        opacity: 0.2;
      }
      svg {
        height: 45px;
        width: 218px;
        position: absolute;
        top: 0;
        left: 0;
      }
      .path {
        stroke-dasharray: 2000px;
        animation: dash 3s linear forwards;
      }
      .path2 {
        stroke-dasharray: 2000px;
        animation: dash2 3s linear forwards;
      }
      @keyframes dash {
        from {
          stroke-dashoffset: 2000px;
        }
        to {
          stroke-dashoffset: 0;
        }
      }
    `}</style>
    <svg>
      <path d={`M0 0 L ${lineLength} 0`}
        stroke='white'
        className={`transitions ${draw === null ? '' : (draw === false ? 'path2' : 'path')}`}
        strokeWidth={1}
        fill='none'
      />
    </svg>
  </div>

export default SkillLine
