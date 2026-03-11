'use client';

import type {
  UseZoomPrefetchNavigationOptions,
  ZoomPrefetchPressHandler,
} from './useZoomPrefetchNavigation.types';

/**
 * On non-iOS platforms, zoom transitions are not supported.
 * Returns the navigate callback directly without any prefetch behavior.
 */
export function useZoomPrefetchNavigation(
  _: UseZoomPrefetchNavigationOptions
): ZoomPrefetchPressHandler {
  return () => false;
}
