/* eslint-disable */
// GENERATED FILE - DO NOT EDIT.
// Source: data/illustrations/empty-state.svg

import { forwardRef, type ReactElement } from 'react';
import { ZagIllustrationBase, type ZagIllustrationProps } from '../base/IllustrationBase';

export type EmptyStateProps = ZagIllustrationProps;

const EMPTYSTATE_ART: ReactElement = (
  <>
      <defs><linearGradient id="a" x1={52} x2={196} y1={28} y2={156} gradientUnits="userSpaceOnUse"><stop stopColor="#818CF8" /><stop offset={1} stopColor="#C084FC" /></linearGradient></defs><circle cx={120} cy={92} r={72} fill="url(#a)" opacity={0.18} /><rect width={124} height={96} x={58} y={42} fill="#FFF" stroke="#E2E8F0" strokeWidth={2} rx={12} /><path stroke="#E2E8F0" strokeWidth={2} d="M58 66h124" /><circle cx={72} cy={54} r={4} fill="#FCA5A5" /><circle cx={86} cy={54} r={4} fill="#FCD34D" /><circle cx={100} cy={54} r={4} fill="#86EFAC" /><rect width={52} height={6} x={74} y={80} fill="#CBD5E1" rx={3} /><rect width={36} height={6} x={74} y={94} fill="#E2E8F0" rx={3} /><path fill="#F59E0B" d="m120 96 20-11 20 11-20 11z" /><path fill="#D97706" d="M120 96v26l20 11v-26z" /><path fill="#B45309" d="M160 96v26l-20 11v-26z" /><circle cx={164} cy={128} r={12} fill="#F8FAFC" stroke="#64748B" strokeWidth={3} /><path stroke="#64748B" strokeLinecap="round" strokeWidth={3} d="m173 137 10 10" /><path fill="url(#a)" d="m186 34 2.8 6.8 6.8 2.8-6.8 2.8-2.8 6.8-2.8-6.8-6.8-2.8 6.8-2.8z" /><circle cx={48} cy={134} r={5} fill="#93C5FD" /><circle cx={198} cy={82} r={4} fill="#F9A8D4" />
  </>
);

/**
 * EmptyState illustration (viewBox "0 0 240 180").
 * Original multi-color fills and gradients are preserved.
 */
export const EmptyState = forwardRef<SVGSVGElement, EmptyStateProps>(
  function EmptyState(props, ref) {
    return (
      <ZagIllustrationBase ref={ref} viewBox="0 0 240 180" {...props}>
        {EMPTYSTATE_ART}
      </ZagIllustrationBase>
    );
  },
);
