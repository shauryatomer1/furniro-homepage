import { create } from "zustand";

type UiStore = {
  isMobileMenuOpen: boolean;
  favoriteProductIds: string[];
  cartCount: number;
  toggleMobileMenu: () => void;
  closeMobileMenu: () => void;
  toggleFavorite: (productId: string) => void;
  addToCart: () => void;
};

export const useUiStore = create<UiStore>((set) => ({
  isMobileMenuOpen: false,
  favoriteProductIds: [],
  cartCount: 0,
  toggleMobileMenu: () =>
    set((state) => ({
      isMobileMenuOpen: !state.isMobileMenuOpen,
    })),
  closeMobileMenu: () =>
    set({
      isMobileMenuOpen: false,
    }),
  toggleFavorite: (productId) =>
    set((state) => ({
      favoriteProductIds: state.favoriteProductIds.includes(productId)
        ? state.favoriteProductIds.filter((id) => id !== productId)
        : [...state.favoriteProductIds, productId],
    })),
  addToCart: () =>
    set((state) => ({
      cartCount: state.cartCount + 1,
    })),
}));
