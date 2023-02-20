package main

import (
	"reflect"
	"testing"
)

func Fib(a, b int) []int {
	fibDizisi := []int{0, 1}
	for i := 2; i <= b; i++ {
		sonrakiFib := fibDizisi[i-1] + fibDizisi[i-2]
		fibDizisi = append(fibDizisi, sonrakiFib)
	}
	return fibDizisi[a : b+1]
}

func TestFib(t *testing.T) {
	//case 1: Başlangıç ve bitiş değerleri arasındaki Fibonacci sayılarını kontrol eder
	result := Fib(2, 7)
	expected := []int{1, 2, 3, 5, 8, 13}
	if !reflect.DeepEqual(result, expected) {
		t.Errorf("Beklenen %v ama sonuç %v", expected, result)
	}

	// case 2: Başlangıç ve bitiş değerleri aynı olan bir durumda, yalnızca tek bir sayı döndürülmeli
	result = Fib(5, 5)
	expected = []int{5}
	if !reflect.DeepEqual(result, expected) {
		t.Errorf("Beklenen %v ama sonuç %v", expected, result)
	}

	// case 3: Başlangıç değeri bitiş değerinden büyükse, boş bir dilim döndürülmeli
	result = Fib(7, 2)
	expected = []int{}
	if !reflect.DeepEqual(result, expected) {
		t.Errorf("Beklenen %v ama sonuç %v", expected, result)
	}

	// case 4: Başlangıç değeri 0 olabilir
	result = Fib(0, 3)
	expected = []int{0, 1, 1, 2}
	if !reflect.DeepEqual(result, expected) {
		t.Errorf("Beklenen %v ama sonuç %v", expected, result)
	}

	// case 5: Bitiş değeri çok büyükse, fonksiyon hala çalışmalı ancak bir hata döndürmemeli
	result = Fib(2, 100)
	if len(result) != 99 {
		t.Errorf("99 uzunluğunda bir sonuç dilimi bekleniyordu, ama uzunluk %v", len(result))
	}

	// Test case 6: Negatif başlangıç veya bitiş değeri verildiğinde, nil döndürülmeli
	result = Fib(-2, 7)
	if result != nil {
		t.Errorf("Boş dizi bekleniyordu ama %v", result)
	}

	result = Fib(2, -7)
	if result != nil {
		t.Errorf("Boş dizi bekleniyordu ama %v", result)
	}
	result = Fib(-2, -7)
	if result != nil {
		t.Errorf("Boş dizi bekleniyordu ama %v", result)
	}

}
