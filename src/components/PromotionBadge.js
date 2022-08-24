import React, { memo } from "react";

function PromotionBadge({ promoBadge }) {
  return <div className="promo">{promoBadge}</div>;
}

export default memo(PromotionBadge);
